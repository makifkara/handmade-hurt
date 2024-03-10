// Handmade Hurt Blog App
/* TODO List
    1-Delete Post Feature
    2-Read Post Feature
    3-Post summary Feature



*/
// Import Section
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.set('view engine', 'ejs');


app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

let blogPosts = [
    { title: 'Embracing the Power of Positive Psychology and Personal Development', content: 'Life is a journey filled with different milestones for each of us. While some navigate this path with a strong internal drive, others may struggle to cope with the challenges it presents. However, in recent times, the fields of positive psychology and personal development offer us a new perspective on this journey.\n\nPositive psychology goes beyond just addressing difficulties; it focuses on individuals strengths, happiness, and quest for meaning. Exploring and developing our inner world not only enriches our lives but also deepens our connection with the outer world. In this process, personal development, step by step, enables us to lead a more conscious and fulfilling life.\n\nApproaching each day with a positive mindset can become a habit that empowers us. Celebrating small victories, cultivating gratitude, and nurturing our inner goodness help us view life through a more optimistic lens. It s essential to remember that personal development and positive psychology are not about reaching a destination but rather a continuous journey. The key is to strive to become a better version of ourselves with each step along the way.', date: ' 18.11.2023', postID: '1', },
    { title: 'The Power of Gratitude: Cultivating Appreciation for a Fulfilling Life', content: 'In the midst of life s challenges and uncertainties, cultivating gratitude can be a powerful tool for fostering happiness and fulfillment. It is about acknowledging the blessings, big and small, that enrich our lives and bring us joy.\n\nPracticing gratitude shifts our focus from what we lack to what we have, instilling a sense of abundance and contentment. It allows us to savor the present moment, cherish our relationships, and find beauty in the ordinary.\n\nMoreover, research has shown that gratitude has numerous benefits for our mental and physical well-being. It reduces stress, enhances resilience, and improves overall quality of life.\n\nSo, let us make gratitude a daily practice, expressing appreciation for the blessings in our lives, and cultivating a positive outlook. By doing so, we not only enhance our own well-being but also spread joy and kindness to those around us.', date: ' 25.11.2023', postID: '8', },
    { title: 'Facing Our Inner Turmoil and Showing Ourselves Kindness', content: 'Life is a journey filled with different milestones for each of us. While some navigate this journey with a strong internal drive, others may struggle with inner turmoil. However, in the midst of this struggle, we often find ourselves being critical rather than showing kindness.\n\nThe voice within us can sometimes be our harshest critic. We exaggerate our mistakes, emphasize our shortcomings, and treat ourselves with relentless harshness. Yet, one of the lessons taught by positive psychology and personal development is the importance of showing ourselves kindness. In our inner turmoil, accepting our mistakes and treating ourselves with gentleness is actually a step towards growth and maturity.\n\nLearning to show ourselves a little more kindness each day nourishes our inner goodness and strengthens our relationship with ourselves. Starting with small steps, being kinder and more understanding towards ourselves can help us experience life in a more positive light. Let us turn inward, take a breath, and approach our inner turmoil with a little more kindness.', date: ' 12.12.2023', postID: '3', },
    { title: 'The Importance of Doing Things for Yourself and the Journey of Growth', content: 'In the hustle and bustle of everyday life, it is easy to get caught up in meeting the needs of others and neglecting our own. However, taking the time to do things for yourself is not selfish; it is essential for your well-being and personal growth.\n\nSelf-care is not just about pampering yourself; it is about nourishing your mind, body, and soul. Whether it is carving out time for a hobby you enjoy, practicing mindfulness, or simply taking a moment to breathe, prioritizing yourself is crucial.\n\nFurthermore, embarking on the journey of personal growth requires intentional effort and self-reflection. It involves stepping out of your comfort zone, facing challenges, and embracing change. Each obstacle you overcome and lesson you learn contributes to your development and helps you become the best version of yourself.\n\nSo, remember to carve out time for yourself amidst life s demands. Embrace the journey of growth, and do not be afraid to invest in your personal development. After all, by nurturing yourself, you not only enhance your own well-being but also become better equipped to positively impact those around you.', date: ' 29.12.2023', postID: '4', },
    { title: 'The Power of Determination and Consistency', content: 'In the pursuit of our goals and dreams, determination and consistency are two invaluable traits that can make all the difference. While talent and intelligence play a role, it is often perseverance and steadfastness that lead to success.\n\nDetermination is the driving force that propels us forward, even in the face of challenges and setbacks. It is the unwavering commitment to our aspirations that keeps us focused and resilient amidst adversity.\n\nEqually important is consistency, the steady and deliberate effort we put forth day in and day out. It is the small, incremental steps we take consistently that ultimately lead to significant progress and achievement.\n\nTogether, determination and consistency form the bedrock of success. They enable us to overcome obstacles, stay the course, and turn our aspirations into reality. So, let us cultivate these qualities within ourselves and embrace the journey with unwavering resolve and steadfast commitment.', date: ' 03.01.2024', postID: '5', },
    { title: 'Finding Balance: Navigating the Intersection of Self-Care and Productivity', content: 'In the fast-paced world we live in, striking a balance between self-care and productivity can be challenging yet essential for our overall well-being. Often, we find ourselves torn between the need to accomplish tasks and the importance of taking care of ourselves.\n\nOn one hand, productivity fuels our sense of accomplishment and contributes to our professional and personal growth. On the other hand, self-care ensures we recharge our batteries, prevent burnout, and maintain a healthy work-life balance.\n\nFinding harmony between these two seemingly opposing forces requires intentionality and mindfulness. It involves setting boundaries, prioritizing tasks, and honoring our needs for rest and rejuvenation.\n\nUltimately, it is about recognizing that self-care and productivity are not mutually exclusive but rather complementary. When we strike a balance between the two, we not only enhance our efficiency and effectiveness but also nurture our overall well-being. So, let us strive to navigate this intersection with grace and mindfulness, prioritizing both our productivity and self-care.', date: ' 22.02.2024', postID: '6', },
    { title: 'Embracing Change: The Key to Personal Growth and Fulfillment', content: 'Change is inevitable in life, yet it is often met with resistance and fear. However, embracing change is essential for our personal growth and fulfillment. It is through change that we learn, evolve, and become the best versions of ourselves.\n\nWhile change may bring uncertainty and discomfort, it also opens doors to new opportunities and experiences. It challenges us to step out of our comfort zones, confront our fears, and discover our true potential.\n\nEmbracing change requires a mindset shift. Instead of viewing it as a threat, we can choose to see it as a catalyst for growth and transformation. By embracing change, we empower ourselves to adapt, innovate, and thrive in an ever-changing world.\n\nSo, let us welcome change with open arms, knowing that it is the gateway to personal growth, fulfillment, and ultimately, a life lived to its fullest potential.', date: ' 07.03.2024', postID: '7', },
];
// get
app.get("/", (req, res) => {
    //console.log(blogPosts);
    res.render('index', { posts: blogPosts });
});
app.get("/contact", (req, res) => {
    res.render('contact');
});
app.get("/new", (req, res) => {
    res.render('new');
});
app.get("/about", (req, res) => {
    res.render('about');
});
app.get("/posts", (req, res) => {
    res.render('posts', { posts: blogPosts });
});
app.get("/edit-post", (req, res) => {
    res.render("editpost", { posts: blogPosts });
});



//send
app.post("/submit", (req, res) => {
    const { title, content, } = req.body;
    const date = new Date().toLocaleDateString();
    const postID = (blogPosts.length + 1).toString();
    const newPost = { title, content, date, postID, };
    //console.log(newPost);
    blogPosts.push(newPost);
    //console.log(blogPosts);
    res.redirect('/');
});

app.post("/selectPost", (req, res) => {
    const postSelectedByUser = blogPosts.find(post => post.postID === req.body.postID);
    //console.log(postSelectedByUser);
    res.render("editpost", {selectedPost: postSelectedByUser, posts: blogPosts});
});

app.post("/selectdeletePost", (req, res) => {
    const postSelectedByUser = blogPosts.find(post => post.postID === req.body.postID);
    //console.log("Deleted Post is: ");
    //console.log( postSelectedByUser);
    //console.log("Index of deleting post:");
    //console.log("Blogposts:");
    //console.log(blogPosts);

    res.render("postdelete", {selectedPost: postSelectedByUser, posts: blogPosts}); 
});

app.post("/selectreadPost", (req, res) => {
    const postSelectedByUser = blogPosts.find(post => post.postID === req.body.postID);
    //console.log("Deleted Post is: ");
    //console.log( postSelectedByUser);
    //console.log("Index of deleting post:");
    //console.log("Blogposts:");
    //console.log(blogPosts);

    res.render("readPost", {selectedPost: postSelectedByUser, posts: blogPosts}); 
});

app.post("/deletePost", (req, res) => {
    const postSelectedByUser = blogPosts.find(post => post.postID === req.body.postID);
    //console.log(blogPosts.indexOf(postSelectedByUser));
    blogPosts.splice(blogPosts.indexOf(postSelectedByUser), 1);
    //console.log("Blogposts:");
    //console.log(blogPosts);
    res.redirect("/");
});


//edit
app.post("/update", (req, res) => {
    const postUpdatedByUser = req.body;
    const postIndex = blogPosts.indexOf(blogPosts.find(post => post.postID === req.body.postID));
    const date = new Date().toLocaleDateString();
    const postID = (postIndex + 1).toString();
    const updatedPost = { title: postUpdatedByUser.title, content: postUpdatedByUser.content, date, postID, };
    //console.log(postUpdatedByUser);
    //console.log(postIndex);
    blogPosts.splice(postIndex, 1, updatedPost);
    //blogPosts.push(postUpdatedByUser);
    res.redirect('/');
});

//listen
app.listen(port, () =>{
    
    console.log(`All is well on port ${port} ${new Date()}`);
});
