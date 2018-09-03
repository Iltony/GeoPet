using Microsoft.EntityFrameworkCore;
using GeoPetClient.DataModels;

namespace GeoPetClient.Database
{
    public class GeoPetContext : DbContext
    {
        private static GeoPetContext _instance = null;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite(@"DataSource=geopet.db;");
        }

        public static GeoPetContext GetInstance()
        {
            if(_instance == null)
            {
                _instance = new GeoPetContext();
            }
            return _instance;
        }

        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pet> Pets { get; set; }
    }
}
