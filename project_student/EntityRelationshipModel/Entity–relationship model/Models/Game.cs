using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Entity_relationship_model.Models
{
    public enum Difficulty
    {
        Easy, Medium, Hard
    }

    public class Game
    {
        public int Id { get; set; }
        public string GameName { get; set; }
        public string Name { get; set; }
        public Difficulty? Difficulty { get; set; }
        [DataType(DataType.Date)]
        public DateTime Date { get; set; }
        public Player Creator { get; set; }
        public virtual ICollection <GamePlayer> GamesPlayers { get; set; }
    }
}
