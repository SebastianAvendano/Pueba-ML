using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using prueba_monolegal.Models;
using prueba_monolegal.Repositories;

namespace prueba_monolegal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PurchaseController : Controller
    {

        private IPurchaseCollection db = new PurchaseCollection();

        [HttpGet]
        public async Task<IActionResult> GetAllPurchases()
        {
            return Ok(await db.GetAllPurchases());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetPurchaseDetails(string id)
        {
            return Ok(await db.GetPurchase(id));
        }

        [HttpPost]
        public async Task<IActionResult> CreatePurchase([FromBody] Purchase purchase)
        {
            
            if (purchase.Client == string.Empty)
            {
                ModelState.AddModelError("client", "this field is required");
            }

            
            await db.InserPurchase(purchase);

            return Created("Created", true);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdatePurchase([FromBody] Purchase purchase, string id)
        {

            if (purchase.Client == string.Empty)
            {
                ModelState.AddModelError("client", "this field is required");
            }

            purchase.Id = new MongoDB.Bson.ObjectId(id);

            await db.updatePurchase(purchase);

            return Created("Created", true);
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> DeletePurchase (string id)
        {
            await db.DeletePurchase(id);

            return NoContent();
        }
    }
}
