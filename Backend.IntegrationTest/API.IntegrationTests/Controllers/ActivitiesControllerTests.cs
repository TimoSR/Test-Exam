// using System.Net.Http.Json;
// using System.Text;
// using Domain;
// using Newtonsoft.Json;
// using NUnit.Framework;
//
// namespace Backend.IntegrationTests.API.IntegrationTests.Controllers;
//
// [TestFixture]
// public class ActivitiesControllerTests
// {
//     private HttpClient _client;
//     
//     private class User
//     {
//         public string email { get; set; }
//         public string password { get; set; }
//     }
//     
//     public class LoginResponse
//     {
//         public string displayName { get; set; }
//         public string token { get; set; }
//         public string userName { get; set; }
//         public string image { get; set; }
//     }
//
//     [SetUp]
//     public void ClientConnection()
//     {
//         //Arrange
//         _client = new HttpClient();
//         _client.BaseAddress = new Uri("https://localhost:7032");
//     }
//     
//     [Test]
//     public void ClientLogin()
//     {
//         //Arrange
//         _client = new HttpClient();
//         _client.BaseAddress = new Uri("https://localhost:7032");
//
//         User user = new User()
//         {
//             email = "bob@test.com",
//             password = "Pa$$w0rd"
//         };
//
//         string json = JsonConvert.SerializeObject(user);
//         
//         // string interpolation in C#
//         // API Address "/account/login"
//         
//         var content = new StringContent(json, Encoding.UTF8, "application/json");
//
//         // Act
//         var response = _client.PostAsync("/account/login", content).Result;
//
//         Console.WriteLine(response);
//         Console.WriteLine(response.StatusCode);
//
//         if (response.IsSuccessStatusCode)
//         {
//             
//             var responseContent = response.Content.ReadAsStringAsync().Result;
//
//             // do something with loginResponse
//             Console.WriteLine(responseContent);
//
//         }
//         else
//         {
//             Console.WriteLine("Error: " + response.StatusCode);
//         }
//         
//     }
//
// }