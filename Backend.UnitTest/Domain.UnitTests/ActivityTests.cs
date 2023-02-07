using System;
using System.Collections.Generic;
using Application.Core;
using Domain;
using Moq;
using NUnit.Framework;

namespace Backend.UnitTest.Domain.UnitTests;

[TestFixture]
public class ActivityTests
{

    private static IEnumerable<TestCaseData> TestCases()
    {
        yield return new TestCaseData(Guid.NewGuid(), "Title 1", DateTime.Now, "Description 1", "Category 1", false,new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 2", DateTime.Now, "Description 2", "Category 2", true,new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 3", DateTime.Now.AddDays(1), "Description 3", "Category 3", false, new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 4", DateTime.Now.AddDays(2), "Description 4", "Category 4", true, new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 5", DateTime.Now.AddDays(3), "Description 5", "Category 5", false, new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 6", DateTime.Now.AddDays(4), "Description 6", "Category 6", true, new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 7", DateTime.Now.AddDays(5), "Description 7", "Category 7", false, new List<ActivityAttendee>());
        yield return new TestCaseData(Guid.NewGuid(), "Title 8", DateTime.Now.AddDays(6), "Description 8", "Category 8", true, new List<ActivityAttendee>());
    }
    
    private class SetProperties
    {

        public Activity activity;

        public SetProperties(Guid id, string title, DateTime date, string description, string category, bool isCancelled,
            ICollection<ActivityAttendee> attendees)
        {
            var mockAttendees = attendees;

            activity = new Activity
            {
                Id = id,
                Title = title,
                Date = date,
                Description = description,
                Category = category,
                IsCancelled = isCancelled,
                Attendees = mockAttendees
            };
        }
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Id_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Id;

        // Assert
        Assert.AreEqual(id, result);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Title_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Title;

        // Assert
        Assert.AreEqual(title, result);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Date_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Date;

        // Assert
        Assert.AreEqual(date, result);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Description_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Description;

        // Assert
        Assert.AreEqual(description, result);
    }

    [Test, TestCaseSource(nameof(TestCases))]
    public void Category_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Category;
    
        // Assert
        Assert.AreEqual(category, result);
    }
    
    [Test, TestCaseSource(nameof(TestCases))]
    public void IsCancelled_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.IsCancelled;
        
        // Assert
        Assert.AreEqual(isCancelled, result);
    }
    
    [Test, TestCaseSource(nameof(TestCases))]
    public void Attendees_Get_ShouldReturnCorrectValue(Guid id, string title, DateTime date, string description, string category, bool isCancelled, ICollection<ActivityAttendee> attendees)
    {
        // Arrange
        var testProperties = new SetProperties(id, title, date, description, category, isCancelled, attendees);

        // Act
        var result = testProperties.activity.Attendees;

        // Assert
        Assert.AreEqual(attendees, result);
    }

}