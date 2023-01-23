using Microsoft.AspNetCore.Mvc;
using API.Controllers;
using NUnit.Framework;

namespace Backend.UnitTest.API.UnitTests.Controllers;

[TestFixture]
public class BuggyControllerTests
{
    private BuggyController _buggyController;

    [SetUp]
    public void Setup()
    {
        _buggyController = new BuggyController();
    }

    [Test]
    public void GetNotFound_ReturnsNotFound()
    {
        // Act
        var result = _buggyController.GetNotFound() as NotFoundResult;

        // Assert
        Assert.IsNotNull(result);
        Assert.AreEqual(404, result.StatusCode);
    }
    
    [Test]
    public void GetBadRequest_ReturnsBadRequest()
    {
        // Act
        var result = _buggyController.GetBadRequest() as BadRequestObjectResult;

        // Assert
        Assert.IsNotNull(result);
        Assert.AreEqual(400, result.StatusCode);
    }
    
    [Test]
    public void GetServerError_ReturnsServerError()
    {
        // Assert
        Assert.Throws<Exception>(() => _buggyController.GetServerError());
    }

    [Test]
    public void GetUnauthorised_ReturnsUnauthorised()
    {
        // Act
        var result = _buggyController.GetUnauthorised() as UnauthorizedResult;

        // Assert
        Assert.IsNotNull(result);
        Assert.AreEqual(401, result.StatusCode);
    }
}