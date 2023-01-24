using MongoDB.Bson;
using MongoDB.Driver;
using prueba_monolegal.Models;

namespace prueba_monolegal.Repositories
{
    public class PurchaseCollection : IPurchaseCollection
    {

        internal MongoDBRepository _repository = new MongoDBRepository();

        private IMongoCollection<Purchase> collection;

        public PurchaseCollection() {
            collection = _repository.db.GetCollection<Purchase>("Pruchases");
        }
        public async Task DeletePurchase(string id)
        {
            var filter = Builders<Purchase>.Filter.Eq(s => s.Id, new ObjectId(id));

            await collection.DeleteOneAsync(filter);
        }

        public async Task<Purchase> GetPurchase(string id)
        {
            return await collection.FindAsync(
                new BsonDocument { {"_id", new ObjectId(id)} }).Result.FirstAsync();
        }

        public async Task<List<Purchase>> GetAllPurchases()
        {
            return await collection.FindAsync(new BsonDocument()).Result.ToListAsync();
        }

        public async Task InserPurchase(Purchase purchase)
        {
            await collection.InsertOneAsync(purchase);
        }

        public async Task updatePurchase(Purchase purchase)
        {
            var filter = Builders<Purchase>.Filter.Eq(s => s.Id, purchase.Id);

            await collection.ReplaceOneAsync(filter, purchase);

        }
    }
}
