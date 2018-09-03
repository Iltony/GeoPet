using Tweetinvi;
using Tweetinvi.Models;

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

        public void TweetSomething(string text)
        {
            Tweet.PublishTweet(text);
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
