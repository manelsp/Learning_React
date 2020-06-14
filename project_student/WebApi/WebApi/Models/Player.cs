using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace WebApi.Models
{
    public class Player
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Nickname { get; set; }
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; }
        public virtual ICollection<GamePlayer> Games { get; set; }
    }
}
