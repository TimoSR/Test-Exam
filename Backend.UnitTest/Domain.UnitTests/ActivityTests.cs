using NUnit.Framework;
using Moq;
using System;
using Domain;
using System.Linq;
using System.Collections.Generic;

namespace Backend.UnitTest.Domain.UnitTests;

[TestFixture]
public class ActivityTests
{
    [Test]
    public void CreateActivity_SetsId()
    {
        // Arrange
        var activity = new Activity
        {
            Title = "Test Activity",
            Date = DateTime.Now,
            Description = "This is a test activity",
            Category = "Test",
            IsCancelled = false,
        };

        // Act
        var result = activity.Id = Guid.NewGuid();

        // Assert
        //Assert.IsTrue(result != Guid.Empty);
        Assert.IsFalse(result != Guid.Empty);
    }

    [Test]
    public void AddAttendee_AddsAttendeeToCollection()
    {
        // Arrange
        var attendee = new ActivityAttendee
        {
            AppUserId = "testuser",
            ActivityId = Guid.NewGuid(),
            IsHost = false,
        };

        var activity = new Activity
        {
            Attendees = new List<ActivityAttendee>(),
        };

        // Act
        activity.Attendees.Add(attendee);

        // Assert
        Assert.IsTrue(activity.Attendees.Any(x => x.AppUserId == attendee.AppUserId));
    }

    [Test]
    public void Cancel_SetsIsCancelledToTrue()
    {
        // Arrange
        var activity = new Activity
        {
            IsCancelled = false
        };

        // Act

        activity.IsCancelled = true;

        // Assert
        Assert.IsTrue(activity.IsCancelled);
    }
}
