using NUnit.Framework;

using Moq;
using Application.Activities;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Persistence;
using API;
using API.Controllers;
using MediatR;

namespace Backend.UnitTest.API.UnitTests;

[TestFixture]
public class ActivitiesControllerTests
{
    private ActivitiesController _controller;
    private Mock<IMediator> _mediator;

    [SetUp]
    public void Setup()
    {
        _mediator = new Mock<IMediator>();
        _controller = new ActivitiesController(_mediator.Object);
    }

    [Test]
    public async Task GetActivities_ReturnsOkObjectResult()
    {
        // Arrange
        var activities = new List<Activity> { new Activity { Id = Guid.NewGuid() }, new Activity { Id = Guid.NewGuid() } };
        _mediator.Setup(x => x.Send(It.IsAny<List.Query>(), It.IsAny<CancellationToken>())).ReturnsAsync(new List.Result { Activities = activities });

        // Act
        var result = await _controller.GetActivities(CancellationToken.None);

        // Assert
        Assert.IsInstanceOf<OkObjectResult>(result);
        var objectResult = result as OkObjectResult;
        var activitiesResult = objectResult.Value as List<Activity>;
        Assert.AreEqual(activities.Count, activitiesResult.Count);
    }
}
