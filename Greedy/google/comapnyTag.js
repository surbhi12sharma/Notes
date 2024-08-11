const axios = require('axios');
const fs = require('fs');

const HEADERS = {
    'x-csrftoken': 'a2JOTqZcQnhhw0s4wkjFLBegfDb40FTX1oyy6LObAfzY4kVWEOhu5aslJaFFqjbZ',
    'Referer': 'https://leetcode.com/problems',
    'Cookie': 'gr_user_id=216ba7e5-3c75-4ca9-a64c-a7aa03eab050; 87b5a3c3f1a55520_gr_last_sent_cs1=sharmasurbhi; __stripe_mid=1fe11e76-6d00-4598-ac68-9b5aa15d06c079c825; cf_clearance=_XPJZrOL11WAHXpaQEJsX1GOGaZmNYVsONusod5qOT0-1718016382-1.0.1.1-1kf0iYCnIkTepb6GGD6qxyV.fQ.bOh8xHtBkgecDwOLcoUru..wSuV8nQKIsuH7l.UtMgTDRDBIZA04GcqH5wQ; csrftoken=a2JOTqZcQnhhw0s4wkjFLBegfDb40FTX1oyy6LObAfzY4kVWEOhu5aslJaFFqjbZ; _gcl_au=1.1.1368687765.1718244910; _ga_DKXQ03QCVK=GS1.1.1718274731.2.0.1718274732.59.0.0; _gid=GA1.2.808330257.1719813098; _ga_CDRWKZTDEX=GS1.1.1720245200.552.1.1720245382.52.0.0; INGRESSCOOKIE=09a3a441aab396ef535fb3317db00eec|8e0876c7c1464cc0ac96bc2edceabd27; ip_check=(false, "2405:201:5c2e:26:557:cddc:3acd:9279"); LEETCODE_SESSION=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfYXV0aF91c2VyX2lkIjoiMjEwMjA1MSIsIl9hdXRoX3VzZXJfYmFja2VuZCI6ImFsbGF1dGguYWNjb3VudC5hdXRoX2JhY2tlbmRzLkF1dGhlbnRpY2F0aW9uQmFja2VuZCIsIl9hdXRoX3VzZXJfaGFzaCI6ImZjNzQ0Y2EwMDgyOTYyY2QxYTkxMGU0YWNlNjhkOTkzMjJkYWViNzk1MzllM2I5Y2E1NWU5OGVjY2I2ZWZmOWYiLCJpZCI6MjEwMjA1MSwiZW1haWwiOiJzdXJiaGlzaGFybWE5MzhAZ21haWwuY29tIiwidXNlcm5hbWUiOiJzaGFybWFzdXJiaGkiLCJ1c2VyX3NsdWciOiJzaGFybWFzdXJiaGkiLCJhdmF0YXIiOiJodHRwczovL2Fzc2V0cy5sZWV0Y29kZS5jb20vdXNlcnMvZGVmYXVsdF9hdmF0YXIuanBnIiwicmVmcmVzaGVkX2F0IjoxNzIwNzkxNzE0LCJpcCI6IjI0MDU6MjAxOjVjMmU6MjY6NWQ0YjplMjA6ZjcxYjplN2Y5IiwiaWRlbnRpdHkiOiJjOTJiYWFlNzEzMThkYzgxZGU1MWE2NjNkZjJmOGI0ZiIsIl9zZXNzaW9uX2V4cGlyeSI6MTIwOTYwMCwic2Vzc2lvbl9pZCI6NjMyNzI2MjYsImRldmljZV93aXRoX2lwIjpbImJiNGQ0YzI3ODA5Njk0M2JiNGJkODRkYzFlMDY4OTU3IiwiMjQwNToyMDE6NWMyZToyNjo1ZDRiOmUyMDpmNzFiOmU3ZjkiXX0.wUN03Y01ubROWtFYBL7kkEiuTXDM3jwmW1bqBQmzEsw; 87b5a3c3f1a55520_gr_session_id=0fe42f61-bc91-4afe-ab03-15c2ab633d2c; 87b5a3c3f1a55520_gr_last_sent_sid_with_cs1=0fe42f61-bc91-4afe-ab03-15c2ab633d2c; 87b5a3c3f1a55520_gr_session_id_sent_vst=0fe42f61-bc91-4afe-ab03-15c2ab633d2c; __gads=ID=49862980b460ba02:T=1704339714:RT=1720873978:S=ALNI_MaD_x8ygfpVhRIjqB7oS3lnIaY_8Q; __gpi=UID=00000cd10edcb1d5:T=1704339714:RT=1720873978:S=ALNI_MamxhyqrO-gq2sFagy3HJT6ArsZcw; __eoi=ID=c786e32cb974a07d:T=1706623066:RT=1720873978:S=AA-AfjYrXYlUHSgZMbrDqQJMaX-m; FCNEC=%5B%5B%22AKsRol8I03NS8O_Bq7wHOMQNOKhlWqYlok4R2sF0TRag6dW8I2lsCfQRHToDpq3K4_Bw0nQNsKoZ3gj-UDM0JZ1YTAi5fI-3TV75KHl9Xypn5jN4cJtsGsK_6JbGoBU8DQqyxBk3wUZGquVrwGhS6TxgVN0Fr6yWaA%3D%3D%22%5D%5D; __cf_bm=De5ujrIZq8sm9QiaI.lP.fJP0NMfY.BO6GMr8fKq4X8-1720876210-1.0.1.1-pP7OQKSPgM5E7YDNxNkBJghbiKdOFFnIreHtdKBzeuGjXKg3BsUm_8wjXTmBTJ.Oj75h5jhFdW5w0q8HOf5HJQ; 87b5a3c3f1a55520_gr_cs1=sharmasurbhi; _gat=1; _ga=GA1.1.517962234.1704249823; _ga_CDRWKZTDEX=GS1.1.1720870309.600.1.1720876244.26.0.0'
};

const graphql_url = "https://leetcode.com/graphql";
const final_data = {};


// Get a list of all questions on Leetcode
async function getQuestionList() {
    try {
        const response = await axios.get("https://leetcode.com/api/problems/all");
        const raw_data = response.data;
        const stat_status_pairs = raw_data.stat_status_pairs;
        const question_title_slug = stat_status_pairs.map(i => i.stat.question__title_slug);
        return question_title_slug;
    } catch (error) {
        console.error("Error fetching question list:", error);
    }
}

// Post a GraphQL request for a given question
async function leech(question) {
    const query = `
        query questionData {
            question(titleSlug: "${question}") {
                questionId
                title
                titleSlug
                content
                isPaidOnly
                difficulty
                likes
                dislikes
                topicTags {
                    name
                    slug
                }
                companyTags {
                    name
                    slug
                }
                stats
            }
        }
    `;

    try {
        const response = await axios.post(
            graphql_url,
            { query },
            { headers: HEADERS }
        );
        const r = response.data.data.question;
        r.url = "https://leetcode.com/problems/" + r.titleSlug;
        final_data[r.questionId] = r;
    } catch (error) {
        console.error(`Error fetching data for question ${question}:`, error);
    }
}

// Fetch data for all questions and save to a JSON file
async function main() {
    const question_list = await getQuestionList();

    for (let i = 0; i < question_list.length; i++) {
        await leech(question_list[i]);
        console.log(`Fetched ${i + 1}/${question_list.length} questions`);
    }

    fs.writeFileSync("data.json", JSON.stringify(final_data, null, 2));
    console.log("Data has been saved to data.json");
}

main();
