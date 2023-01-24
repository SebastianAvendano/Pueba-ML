using prueba_monolegal.Models;

namespace prueba_monolegal.Repositories
{
    public interface IPurchaseCollection
    {
        Task InserPurchase(Purchase purchase);
        Task updatePurchase(Purchase purchase);
        Task DeletePurchase(string id);
        Task <List<Purchase>> GetAllPurchases();
        Task <Purchase> GetPurchase(string id);

    }
}
