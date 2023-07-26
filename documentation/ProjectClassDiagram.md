``` mermaid
classDiagram-v2
    class Exercise {
        +string title
        +string description
        +Language language
        +Author author
        +User curator
        +Workshop workshop
        +Category category
        +Exhaustion exhaustion
        +Target target
        +number minTime
        +number maxTime
        +number minParticipants
        +number maxParticipants
    }
    class Exhaustion {
        <<enumeration>>
        LOW
        MEDIUM
        HIGH
    }
    Exercise "1" --o "1" Exhaustion : exhaustion
    class Target {
        <<enumeration>>
        CONCENTRATION
        ENERGY
        GROUPAWARENESS
    }
    Exercise "1" --o "n" Target : target
    class User {
        +string id
        +string username
        +string password
        +string displayName
        +string countryOfOrigin
    }
    Exercise "1" --o "1" User : curator
    class Author {
        +string name
        +string familyName
        +string countryOfOrigin
    }
    Exercise "1" --o "1" Author : author
    class Language {
        +string isoCode
        +string englishName
    }
    Exercise "1" --o "1" Language : language
    class Workshop {
        +string id
        +string title
        +number startDate
        +number endDate
        +
    }
    Exercise "1" --o "1" Workshop : workshop
    class Category {
        +string id
        +string name
        +Category subcategory
        +CategoryType type
    }
    Exercise "1" --o "1" Category : category
    Category "1" --o "n" Category : subcategory
    class CategoryType {
        <<enumeration>>
        EXERCISE
        GAME
    }
    Category "1" --o "1" CategoryType : type
```