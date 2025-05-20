import mongoose from 'mongoose';

const quoteSchema = mongoose.Schema({
    quote: {
        type: String,
        required: [true, 'Please provide a Quote']
    },
    author: {
        type: String,
        required: [true, 'Please provide Author']
    },
    published: {
        type: String,
        required: [true, 'Please provide published date']
    },
    title: {
        type: String,
        required: [true, 'Please provide a title']
    }
});

const Quote = mongoose.model('Quote', quoteSchema);

export default Quote;
