using MongoDB.Driver;

namespace prueba_monolegal.Repositories
{
    public class MongoDBRepository
    {
        public MongoClient client;

        public IMongoDatabase db;

        public MongoDBRepository()
        {
            client = new MongoClient("mongodb+srv://sebastianAvendano:1075302354@monolegal.kcvki5o.mongodb.net/test");

            db = client.GetDatabase("monolegal");
        }
    }
}
