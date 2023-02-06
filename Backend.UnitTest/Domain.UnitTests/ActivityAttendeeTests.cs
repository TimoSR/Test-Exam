using Domain;

namespace Backend.UnitTest.Domain.UnitTests;
using NUnit.Framework;

[TestFixture]
public class ActivityAttendeeTests
{
    [TestCase("user123", true, TestName = "Test with appUserId = user123 and isHost = true", Description = "This test case tests the scenario where the attendee is a host.")]
    [TestCase("user456", false, TestName = "Test with appUserId = user456 and isHost = false", Description = "This test case tests the scenario where the attendee is not a host.")]
    [TestCase("user789", true, TestName = "Test with appUserId = user789 and isHost = true", Description = "This test case tests another scenario where the attendee is a host.")]
    [TestCase("user321", false, TestName = "Test with appUserId = user321 and isHost = false", Description = "This test case tests another scenario where the attendee is not a host.")]
    [TestCase("", true, TestName = "Test with appUserId = empty string and isHost = true", Description = "This test case tests the scenario where the attendee has an empty appUserId and is a host.")]
    [TestCase("", false, TestName = "Test with appUserId = empty string and isHost = false", Description = "This test case tests the scenario where the attendee has an empty appUserId and is not a host.")]
    [TestCase(null, true, TestName = "Test with appUserId = null and isHost = true", Description = "This test case tests the scenario where the attendee has a null appUserId and is a host.")]
    [TestCase(null, false, TestName = "Test with appUserId = null and isHost = false", Description = "This test case tests the scenario where the attendee has a null appUserId and is not a host.")]
    [TestCase("user999", true, TestName = "Test with appUserId = user999 and isHost = false", Description = "This test case tests the scenario where the attendee has a incorrect isHost value.")]
    [TestCase("user000", false, TestName = "Test with appUserId = user000 and isHost = true", Description = "This test case tests the scenario where the attendee has a incorrect isHost value.")]
    public void Test_ActivityAttendeeProperties_ShouldBeSetCorrectly(string appUserId, bool isHost)
    {
        // Arrange
        var attendee = new ActivityAttendee
        {
            AppUserId = appUserId,
            AppUser = new AppUser(),
            ActivityId = Guid.NewGuid(),
            Activity = new Activity(),
            IsHost = isHost
        };

        // Act
        var resultAppUserId = attendee.AppUserId;
        var resultAppUser = attendee.AppUser;
        var resultActivityId = attendee.ActivityId;
        var resultActivity = attendee.Activity;
        var resultIsHost = attendee.IsHost;

        // Assert
        Assert.AreEqual(appUserId, resultAppUserId);
        Assert.IsNotNull(resultActivityId);
        Assert.IsNotNull(resultActivity);
        Assert.IsNotNull(resultAppUser);
        Assert.AreEqual(isHost, resultIsHost);
    }
}
