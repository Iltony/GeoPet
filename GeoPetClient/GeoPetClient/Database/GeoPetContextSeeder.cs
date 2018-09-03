using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GeoPetClient.DataModels;

namespace GeoPetClient.Database
{
    public static class GeoPetContextSeeder
    {
        public static void Seed(GeoPetContext context)
        {
            if (context.Database.EnsureCreated())
            {
                context.Database.EnsureDeleted();
                context.Database.EnsureCreated();
                context.Owners.Add((new Owner
                {
                    Mail = "mail1@mail.com",
                    Name = "Roberto1",
                    Password = "pass2345",
                    Phone = "11111"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2015, 12, 17),
                    Color = "Blanco",
                    Email = "mail1@mail.com",
                    ImageUrl = "www.image.com/1234",
                    Name = "Firulais",
                    Race = "Cocker",
                    Type = "Perro"
                }));

                context.SaveChanges();
            }
        }

        public static void SeedTestData(GeoPetContext context)
        {

            if (context.Owners.Any())
            {

                context.Owners.Add((new Owner
                {
                    Mail = "jOrtiz@mail.com",
                    Name = "Juan",
                    Password = "pass2345",
                    Phone = "099000000"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "fFernandez@hotmail.com",
                    Name = "Fabrizio",
                    Password = "pass7890",
                    Phone = "099111111"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "dTorres@gmail.com",
                    Name = "Diego",
                    Password = "pass1111",
                    Phone = "099222222"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "sGalan@yahoo.com",
                    Name = "Sebastian",
                    Password = "pass6666",
                    Phone = "099333333"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "pBarrios@adinet.com.uy",
                    Name = "Patricia",
                    Password = "pass2345",
                    Phone = "099444444"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "cPimienta@gmail.com",
                    Name = "Carlos",
                    Password = "pass2345",
                    Phone = "099555555"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "sDeAvila@yahoo.com",
                    Name = "Santiago",
                    Password = "pass8888",
                    Phone = "099666666"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "jRios@hotmail.com",
                    Name = "Jonathan",
                    Password = "pass6666",
                    Phone = "099777777"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "fArebalo@mail.com",
                    Name = "Fernando",
                    Password = "passfacil",
                    Phone = "099888888"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "mVila@msdn.com",
                    Name = "Mauro",
                    Password = "passdificil",
                    Phone = "099999999"
                }));

                context.Owners.Add((new Owner
                {
                    Mail = "mZammarelli@mail.com",
                    Name = "Mariana",
                    Password = "pass1688",
                    Phone = "096000000"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2014, 1, 8),
                    Color = "Marron",
                    Email = "pBarrios@adinet.com.uy",
                    ImageUrl =
                        "https://cdn20.patchcdn.com/users/22942932/20171024/101603/styles/T800x600/public/processed_images/starsky-1508854517-6249.jpg",
                    Name = "Buky",
                    Race = "Labrador",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2015, 12, 17),
                    Color = "Negro",
                    Email = "mZammarelli@mail.com",
                    ImageUrl =
                        "https://cdn20.patchcdn.com/users/22942932/20180320/025242/styles/T800x600/public/processed_images/savannah-1521571046-1688.jpg",
                    Name = "Pochi",
                    Race = "Siames",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2013, 11, 5),
                    Color = "Beige",
                    Email = "pBarrios@adinet.com.uy",
                    ImageUrl =
                        "https://iheartdogs.com/wp-content/uploads/2017/08/2936080986_0cf1f4ccf6_z-e1502221794694.jpg",
                    Name = "Tommy",
                    Race = "Salchicha",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2010, 7, 2),
                    Color = "Negro",
                    Email = "fArebalo@mail.com",
                    ImageUrl =
                        "https://freerangestock.com/sample/30203/tricolor-female-cat-portraitanimals-cat-cats-pet-pets-portrait-background.jpg",
                    Name = "Cachete",
                    Race = "Bengala",
                    Type = "Gato"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2018, 7, 13),
                    Color = "Blanco",
                    Email = "jRios@hotmail.com",
                    ImageUrl = "http://www.freepressjournal.in/wp-content/uploads/2017/10/Pets-in-Diwali.jpg",
                    Name = "Indio",
                    Race = "Labrador",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2013, 10, 10),
                    Color = "Marron",
                    Email = "jOrtiz@mail.com",
                    ImageUrl = "https://cdn2.lamag.com/wp-content/uploads/sites/6/2016/10/RealDog.jpg",
                    Name = "Pelo",
                    Race = "Beige",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2017, 8, 2),
                    Color = "Blanco",
                    Email = "mVila@msdn.com",
                    ImageUrl = "https://i.ytimg.com/vi/gRj66oBuRnQ/hqdefault.jpg",
                    Name = "Mauro",
                    Race = "Ragdoll",
                    Type = "Gato"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2017, 8, 2),
                    Color = "Negro",
                    Email = "fFernandez@hotmail.com",
                    ImageUrl =
                        "https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/7/a3/7a3a4d0a-74db-11e8-9389-7bcb129bc2d3/5b2ad8e89e4de.image.jpg",
                    Name = "Fabrizio",
                    Race = "SinRazaDefinida",
                    Type = "Perro"
                }));


                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2014, 9, 9),
                    Color = "Amarillo",
                    Email = "sDeAvila@yahoo.com",
                    ImageUrl = "https://probonoaustralia.com.au/wp-content/uploads/2016/09/Jetpets-6.jpg",
                    Name = "Santiago",
                    Race = "Collie",
                    Type = "Perro"
                }));

                context.Pets.Add((new Pet
                {
                    Birthdate = new DateTime(2015, 8, 8),
                    Color = "Gris",
                    Email = "dTorres@gmail.com",
                    ImageUrl = "http://images.meteociel.fr/im/6311/Siberian-Husky-1_bgi0.jpg",
                    Name = "Diego",
                    Race = "Huskie",
                    Type = "Perro"
                }));

                context.SaveChanges();
            }
        }
    }
}
