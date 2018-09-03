﻿using System;
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
                Birthdate = "17/12/2015",
                Color = "Blanco",
                Email = "mail1@mail.com",
                ImageUrl = "www.image.com/1234",
                Name = "Firulais",
                Race = "Cocker",
                Type = "Perro"
            }));
        }
    }
}