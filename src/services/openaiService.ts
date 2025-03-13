import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export async function fetchProductData(productName: string) {
    const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
            model: 'gpt-4',
            messages: [{ role: 'system', content: `Descreva o produto '${productName}', gere um código de barras e categorize.` }]
        },
        {
            headers: { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }
        }
    );
    return response.data;
}
