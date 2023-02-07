using Microsoft.AspNetCore.Identity;
using Moq;
using NUnit.Framework;
using Domain;

namespace Backend.UnitTest.Domain.UnitTests;

[TestFixture]
public class AppUserTests
{

    private class SetProperties
    {

        public AppUser appUser;

        public SetProperties(string displayName, string bio, ICollection<ActivityAttendee> activities)
        {

            var mockAttendees = activities;

            appUser = new AppUser()
            {
                DisplayName = displayName,
                Bio = bio,
                Activities = mockAttendees
            };
        }
    }

    [TestCaseSource(nameof(TestCases))]
    public void DisplayName_Getter_ReturnsExpectedValue(string displayName, string bio, ICollection<ActivityAttendee> activities)
    {
        // Arrange
        var testProperties = new SetProperties(displayName, bio, activities);

        // Act
        var result = testProperties.appUser.DisplayName;

        // Assert
        Assert.That(result, Is.EqualTo(displayName));
    }

    [TestCaseSource(nameof(TestCases))]
    public void Bio_Getter_ReturnsExpectedValue(string displayName, string bio, ICollection<ActivityAttendee> activities)
    {
        // Arrange
        var testProperties = new SetProperties(displayName, bio, activities);

        // Act
        var result = testProperties.appUser.Bio;

        // Assert
        Assert.AreNotEqual(result, Is.EqualTo(bio));
    }

    [TestCaseSource(nameof(TestCases))]
    public void Activities_Getter_ReturnsExpectedValue(string displayName, string bio, ICollection<ActivityAttendee> activities)
    {

        var testProperties = new SetProperties(displayName, bio, activities);

        // Act
        var result = testProperties.appUser.Activities;

        // Assert
        Assert.That(result, Is.EqualTo(activities));
    }

    private static IEnumerable<TestCaseData> TestCases()
    {
        // Test case 1: Test the display name with a non-empty string
        yield return new TestCaseData("John Doe", "Bio 1", null)
            .SetName("Test case 1: Non-empty display name")
            .SetDescription("Test the display name with a non-empty string");

        // Test case 2: Test the display name with an empty string
        yield return new TestCaseData("", "Bio 2", null)
            .SetName("Test case 2: Empty display name")
            .SetDescription("Test the display name with an empty string");

        // Test case 3: Test the display name with a null value
        yield return new TestCaseData(null, "Bio 3", null)
            .SetName("Test case 3: Null display name")
            .SetDescription("Test the display name with a null value")
            .SetDescription("Expect it to succeed");

        // Test case 4: Test the bio with a non-empty string
        yield return new TestCaseData("John Doe", "I am a software engineer.", null)
            .SetName("Test case 4: Non-empty bio")
            .SetDescription("Test the bio with a non-empty string");

        // Test case 5: Test the bio with an empty string
        yield return new TestCaseData("John Doe", "", null)
            .SetName("Test case 5: Empty bio")
            .SetDescription("Test the bio with an empty string");

        // Test case 6: Test the bio with a null value
        yield return new TestCaseData("John Doe", null, null)
            .SetName("Test case 6: Null bio")
            .SetDescription("Test the bio with a null value");

        // Test case 7: Test the activities with a non-empty collection
        var mockActivities = new List<ActivityAttendee> { new ActivityAttendee() };
        yield return new TestCaseData("John Doe", "Bio 7", mockActivities)
            .SetName("Test case 7: Non-empty activities")
            .SetDescription("Test the activities with a non-empty collection");

        // Test case 8: Test the activities with an empty collection
        yield return new TestCaseData("John Doe", "Bio 8", new List<ActivityAttendee>())
            .SetName("Test case 8: Empty activities")
            .SetDescription("Test the activities with an empty collection");

        // Test case 9: Test the activities with a null value
        yield return new TestCaseData("John Doe", "Bio 9", null)
            .SetName("Test case 9: Null activities")
            .SetDescription("Test the activities with a null value");

        // Test case 10: Test all properties with non-empty values
        var mockActivities2 = new List<ActivityAttendee> { new ActivityAttendee() };
        yield return new TestCaseData("Jane Doe", "I am a data scientist.", mockActivities2)
            .SetName("Test case 10: All non-empty properties")
            .SetDescription("Test all properties with non-empty values");
    }
}