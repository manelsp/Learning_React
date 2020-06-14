using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Entity_relationship_model.Models
{
    public class GamePlayer
    {
        public int Id { get; set; }
        public int IdPlayer { get; set; }
        public Player Player { get; set; }
        public int IdGame { get; set; }
        public Game Game { get; set; }
    }
}
