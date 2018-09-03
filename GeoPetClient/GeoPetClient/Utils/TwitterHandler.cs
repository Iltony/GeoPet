using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using GeoPetClient.Database;
using GeoPetClient.DataModels;
using Tweetinvi;
using Tweetinvi.Models;
using Tweetinvi.Parameters;

namespace GeoPetClient.Utils
{
    public class TwitterHandler
    {
        private static TwitterHandler _instance = null;
        private static object _instanceLocker = new object();
        private static IAuthenticatedUser user;

        public static TwitterHandler GetInstance()
        {
            lock (_instanceLocker)
            {
                if (_instance == null)
                {
                    _instance = new TwitterHandler();
                }
            }
            return _instance;
        }

        public void TweetLostPet(LostPet lostPet)
        {
            var context = GeoPetContext.GetInstance();
            var pet = context.Pets.Where(x => x.Email.Equals(lostPet.Email) && x.Name.Equals(lostPet.Name)).SingleOrDefault();
            byte[] imgBytes;
            using (WebClient client = new WebClient())
            {
                imgBytes = client.DownloadData(new Uri(pet.ImageUrl));
            }
            //Generate any parameters to be included
            var publishParams = new PublishTweetOptionalParameters();
            publishParams.MediaBinaries = new List<byte[]> { imgBytes };

            Tweet.PublishTweet($"Se perdió {pet.Name} :(, ayudanos a encontrarl@", publishParams);
        }

        public void TweetFoundPet(LostPet lostPet)
        {
            var context = GeoPetContext.GetInstance();
            var pet = context.Pets.Where(x => x.Email.Equals(lostPet.Email) && x.Name.Equals(lostPet.Name)).SingleOrDefault();
            byte[] imgBytes;
            using (WebClient client = new WebClient())
            {
                imgBytes = client.DownloadData(new Uri(pet.ImageUrl));
            }

            var publishParams = new PublishTweetOptionalParameters();
            publishParams.MediaBinaries = new List<byte[]> { imgBytes };

            Tweet.PublishTweet($"Encontraron a {pet.Name}!!! :)", publishParams);
        }

        private TwitterHandler()
        {
            Auth.SetUserCredentials(
                "SpbJ3zlg5dkJBSOw9ot9rvSI9",
                "U3V7bLEk6fIgBF1tjBMj2921tybenunbM0924uFI60OPUtpLzA",
                "1036320108229128192-M5D5delv6UUrND9Lxb86sQRPnxd3rB",
                "Y35S1HzckYmxcq4UWcw9byNnHzIcF8hnWwJ0Dh3r1rAhc");
            user = User.GetAuthenticatedUser();
        }
    }
}
