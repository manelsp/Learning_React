using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApi.Models;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GamePlayersController : ControllerBase
    {
        private readonly Context _context;

        public GamePlayersController(Context context)
        {
            _context = context;
        }

        // GET: api/GamePlayers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<GamePlayer>>> GetGamePlayer()
        {
            return await _context.GamePlayer.ToListAsync();
        }

        // GET: api/GamePlayers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<GamePlayer>> GetGamePlayer(int id)
        {
            var gamePlayer = await _context.GamePlayer.FindAsync(id);

            if (gamePlayer == null)
            {
                return NotFound();
            }

            return gamePlayer;
        }

        // GET: api/gameplayers/game/:id
        [HttpGet("game/{id}")]
        public IEnumerable<Player> GetPlayers([FromRoute] int id)
        {
            var GamePlayers = _context.GamePlayer.Where(x => x.GameId == id).Select(x => x.PlayerId).ToList();

            return _context.Players.Where(x => GamePlayers.Contains(x.Id));
        }

        // PUT: api/GamePlayers/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGamePlayer(int id, GamePlayer gamePlayer)
        {
            if (id != gamePlayer.Id)
            {
                return BadRequest();
            }

            _context.Entry(gamePlayer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GamePlayerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/GamePlayers
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<GamePlayer>> PostGamePlayer(GamePlayer gamePlayer)
        {
            _context.GamePlayer.Add(gamePlayer);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGamePlayer", new { id = gamePlayer.Id }, gamePlayer);
        }

        // DELETE: api/GamePlayers/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<GamePlayer>> DeleteGamePlayer(int id)
        {
            var gamePlayer = await _context.GamePlayer.FindAsync(id);
            if (gamePlayer == null)
            {
                return NotFound();
            }

            _context.GamePlayer.Remove(gamePlayer);
            await _context.SaveChangesAsync();

            return gamePlayer;
        }

        private bool GamePlayerExists(int id)
        {
            return _context.GamePlayer.Any(e => e.Id == id);
        }
    }
}
