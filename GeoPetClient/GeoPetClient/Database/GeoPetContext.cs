using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.SQLite;
using GeoPetClient.DataModels;

namespace GeoPetClient.Database
{
    public class GeoPetContext : DbContext
    {
        private static GeoPetContext _instancia = null;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlite(@"DataSource=geopet.db;");
        }

        public static GeoPetContext GetInstance()
        {
            if(GeoPetContext._instancia == null)
                _instancia = new GeoPetContext();
            return _instancia;
        }

        

        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pet> Pets { get; set; }
    }
}
