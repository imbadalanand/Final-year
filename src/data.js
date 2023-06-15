const data = [
        {
            name: 'Political Science',
            id: 1,
            language:'Hindi',
            category: 'Politics',
            image:'/images/polscience.jpg',
            price: 120,
            countInStock: 2,
            author:'Dr. Pukhraj Jain',
            rating: 4.0,
            numReviews: 10,
            description:'Political Science Syllabus For B.A. Semester I of Lucknow University keke ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
            publisher:'Bharti Bhawan'
        },
        {
            name: 'Losing Hope',
            id: 2,
            language:'English',
            category: 'Romance',
            image:'/images/losing-hope.jpg',
            price: 60,
            countInStock: 1,
            author:'Mr. Hoover Collen',
            rating: 5.0,
            numReviews: 5,
            description:"Sky returns from the events outlined in Hopeless. She has been baring everything, secrets, feelings and memories, but Holder is still hiding his past. He continues to be haunted by the young girl he let walk away, and he looks for her, trying to free himself of the guilt. However, he has no idea that when he finds her, he will also find greater melancholy. In this breath-taking sequel to the bestseller, Colleen Hoover reveals the darkness behind Holders past",
            publisher: "Gyan Bharti"
        },
        {
            name: 'The Bombing War',
            id: 3,
            language:'English',
            category: 'WAR',
            image:'/images/thebombing.jpg',
            price: 420,
            countInStock: 1,
            author:'Overy Richard',
            rating: 4.0,
            numReviews: 3,
            description:'The ultimate history of the Blitz and bombing in the Second World War, from Wolfson Prize-winning historian and author Richard Overy The use of massive fleets of bombers to kill and terrorize civilians was an aspect of the Second World War which continues to challenge the idea that Allies specifically fought a moral war.',
            publisher: "Prakash Publication"
        },
        {
            name: 'India is My Dream',
            id: 4,
            language: 'Hindi',
            category: 'Biography',
            image:'/images/gandhi.jpg',
            price: 65,
            countInStock: 1,
            author:'M. K. Gandhi',
            rating: 5.0,
            numReviews: 3,
            description:'This book is a collection of passages from speeches and writings of Gandhi showcasing how he envisaged India. Enumerating his views and ideas on various socio-political, cultural and economic issues, the book renders a fascinating insight into Gandhis ideologies and his dream of a prosperous and vibrant India'
        },
        {
            name: 'It Ends with Us',
            id: 5,
            language:'English',
            category: 'Romance',
            image:'/images/5.jpg',
            price: 220,
            countInStock: 2,
            author:'Colleen Hoover',
            rating: 4.0,
            numReviews: 10,
            description:"Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town where she grew up--she graduated from college, moved to Boston, and started her own business.",
            publisher:'Atria Books'
        },
        {
            name: 'Ikigai',
            id: 6,
            language:'English',
            category: 'Romance',
            image:'/images/6.jpg',
            price: 140,
            countInStock: 4,
            author:' Francesc Miralles',
            rating: 5.0,
            numReviews: 5,
            description:"Sky returns from the events outlined in Hopeless. She has been baring everything, secrets, feelings and memories, but Holder is still hiding his past. He continues to be haunted by the young girl he let walk away, and he looks for her, trying to free himself of the guilt. However, he has no idea that when he finds her, he will also find greater melancholy. In this breath-taking sequel to the bestseller, Colleen Hoover reveals the darkness behind Holders past",
            publisher: "Badal Books"
        },
        {
            name: 'The Atomic Habits',
            id: 7,
            language:'English',
            category: 'Science',
            image:'/images/7.jpg',
            price: 110,
            countInStock: 1,
            author:' James Clear',
            rating: 4.0,
            numReviews: 3,
            description:'The ultimate history of the Blitz and bombing in the Second World War, from Wolfson Prize-winning historian and author Richard Overy The use of massive fleets of bombers to kill and terrorize civilians was an aspect of the Second World War which continues to challenge the idea that Allies specifically fought a moral war.',
            publisher: "Arrow"
        },
        {
            name: 'The Phycology of Money',
            id: 8,
            language: 'English',
            category: 'Finance',
            image:'/images/8.jpg',
            price: 340,
            countInStock: 5,
            author:' Morgan Housel',
            rating: 5.0,
            numReviews: 3,
            description:'Timeless lessons on wealth, greed, and happiness doing well with money isn?t necessarily about what you know. It?s about how you behave. ',
            publisher: " Jaico Publishing House"
        },{
            name: "Life's Amazing Secret",
            id: 9,
            language:'English',
            category: 'Devotional',
            image:'/images/9.jpg',
            price: 310,
            countInStock: 3,
            author:' Gaur Gopal Das',
            rating: 4.0,
            numReviews: 3,
            description: "Gaur Gopal Das and his wealthy young friend Harry get talking, delving into concepts ranging from the human condition to finding one's purpose in life and the key to lasting happiness.",
            publisher: "National BestSeller"
        },{
            name: 'Bhagavad Gita',
            id: 10,
            language:'English',
            category: 'Religious',
            image:'/images/10.jpg',
            price: 510,
            countInStock: 7,
            author:'Ved-Vyas',
            rating: 5.0,
            numReviews: 3,
            description:'Holy Book',
            publisher: "Gitapress Gorakhpur"
        },{
            name: 'Rich Dad Poor Dad',
            id: 11,
            language:'English',
            category: 'Business',
            image:'/images/11.jpg',
            price: 200,
            countInStock: 6,
            author:'Robert T.Kiyosaki',
            rating: 4.0,
            numReviews: 3,
            description:'The book explodes the myth that you need to earn a high income to be rich and explains the difference between working for money and having your money work for you.',
            publisher: "Plata Publication"
        },
        {
            name: "Grandma's Bag of Stories",
            id: 12,
            language:'Hindi',
            category: 'Fiction',
            image:'/images/12.jpg',
            price: 120,
            countInStock: 6,
            author:'Sudha Murthy',
            rating: 4.0,
            numReviews: 3,
            description:'Grandma tells the stories over long summer days and nights, as seven children enjoy life in her little town. ',
            publisher: ""
        },
        {
            name: "Wings of Fire",
            id: 13,
            language:'Hindi',
            category: 'Biography',
            image:'/images/13.jpg',
            price: 120,
            countInStock: 6,
            author:'Dr. A P J Abdul Kalam',
            rating: 4.0,
            numReviews: 3,
            description:'Grandma tells the stories over long summer days and nights, as seven children enjoy life in her little town. ',
            publisher: ""
        },
        {
            name: "General Knowledge 2023",
            id: 14,
            language:'Hindi',
            category: 'General Knowledge',
            image:'/images/14.jpg',
            price: 120,
            countInStock: 6,
            author:'Arihant',
            rating: 4.0,
            numReviews: 3,
            description:'General Knowledge',
            publisher: "Arihant"
        },
        {
            name: "Black Holes",
            id: 15,
            language:'English',
            category: 'Fiction',
            image:'/images/15.jpg',
            price: 120,
            countInStock: 6,
            author:'Stephen Hawkins',
            rating: 4.0,
            numReviews: 3,
            description:'',
            publisher: "BBC"
        },
        {
            name: "Sawal hi Jawab hai",
            id: 16,
            language:'Hindi',
            category: 'Business',
            image:'/images/16.jpg',
            price: 120,
            countInStock: 6,
            author:'Allen Phease',
            rating: 4.0,
            numReviews: 3,
            description:'',
            publisher: ""
        }
    ]
    export default data
