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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Pet>().HasKey(u => new
            {
                u.Email,
                u.Name
            });
        }

        public static GeoPetContext GetInstance()
        {
            if(_instance == null)
            {
                
                _instance = new GeoPetContext();
                _instance.Database.EnsureCreated();
            }
            return _instance;
        }

        public DbSet<Owner> Owners { get; set; }
        public DbSet<Pet> Pets { get; set; }
    }
}
