import Quote from '../models/quoteModel.js';

async function createQuote(req, res) {
    const { quote, author, published, title } = req.body;

    if (!quote || !author || !published || !title){
        return res.status(400).send('Please fill out all fields.');
    }

    try {
        await Quote.create({ quote, author, published, title });
        return res.status(200).send('Quote successfully created');
    } catch (error) {
        return res.status(500).json({ message: 'Failed to create quote', error });
    }
}

async function getAllQuotes(req, res) {
    try {
        const quotes = await Quote.find();
        res.status(200).json(quotes);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch quotes', error });
    }
}

export { createQuote, getAllQuotes };
