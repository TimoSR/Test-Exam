using NUnit.Framework;

namespace Backend.IntegrationTests.API.IntegrationTests.Controllers;

[TestFixture]
public class ActivitiesControllerTests
{
    private HttpClient _client;

    [SetUp]
    public void ClientConnection()
    {
        //Arrange
        _client = new HttpClient();
        _client.BaseAddress = new Uri("https://localhost:7032/");
    }

    [Test]
    public void API_Connection_Successful()
    {
        //Act
        var response = _client.GetAsync("/get").Result;

        //Assert
        Assert.IsTrue(response.IsSuccessStatusCode);
        var content = response.Content.ReadAsStringAsync().Result;
        Assert.IsNotNull(content);
    }
}