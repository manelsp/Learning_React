using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Models
{
    public class Context:DbContext
    {
        public Context()
        {

        }

        public Context(DbContextOptions<Context> options)
        : base(options)
        {

        }
        //protected override void OnModelCreating(ModelBuilder modelBuilder)
        //{
        //    modelBuilder.Entity<Player>().HasMany(Player => Player.GamesOwner)
        //        .WithOne().HasForeignKey(con => con.GameOwnerId);
        //    modelBuilder.Entity<Player>()
        //        .HasMany<Game>(s => s.Games)
             
        //        .Map(cs =>
        //        {
        //            cs.MapLeftKey("PlayerId");
        //            cs.MapRightKey("GameId");
        //            cs.ToTable("GamePlayer");
        //        });
        //}
        public virtual DbSet <Game> Games { get; set; }
        public virtual DbSet <Player> Players { get; set; }
        public DbSet<WebApi.Models.GamePlayer> GamePlayer { get; set; }
    }
}
