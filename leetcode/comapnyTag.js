const fetch = require('node-fetch');
const cheerio = require('cheerio');

async function fetchQuestionsByCompany(company) {
    const url = `https://leetcode.com/company/${company}`;
    const headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    };

    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`Failed to fetch data. Status code: ${response.status}`);
        }

        const html = await response.text();
        const $ = cheerio.load(html);
        const questions = [];

        $('div.reactable-data tr').each((index, element) => {
            const questionInfo = $(element).find('td');
            if (questionInfo.length > 0) {
                const questionId = questionInfo.eq(1).text().trim();
                const title = questionInfo.eq(2).text().trim();
                const difficulty = questionInfo.eq(4).text().trim();
                questions.push({
                    question_id: questionId,
                    title: title,
                    difficulty: difficulty
                });
            }
        });

        return questions;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Example usage:
const companyName = 'google';

fetchQuestionsByCompany(companyName)
    .then(questions => {
        if (questions) {
            console.log(`Questions for ${companyName}:`);
            questions.forEach(question => {
                console.log(`- ${question.question_id}: ${question.title} (${question.difficulty})`);
            });
        } else {
            console.log('Failed to fetch data.');
        }
    })
    .catch(error => console.error('Error:', error));
