import React from "react"


// Images for Expense Analyser
import ExpenseA1 from "../../Assets/Projects/ExpenseA1.png"
import ExpenseA2 from "../../Assets/Projects/ExpenseA2.png"
import ExpenseA3 from "../../Assets/Projects/ExpenseA3.png"
import ExpenseA4 from "../../Assets/Projects/ExpenseA4.png"

// Images for Intelli Board
import IntelliB1 from "../../Assets/Projects/IntelliBoardA1.png"

//Images for Fakenews Classifier
import Fakenews1 from "../../Assets/Projects/Fakenews1.png"
const ExpenseAImages = [ExpenseA1,ExpenseA2,ExpenseA3, ExpenseA4]
const IntelliBImages = [IntelliB1]
const FakenewsImages = [Fakenews1]


const projectData = [
    {
        'Key':1,
        'Title': "Intelliboard",
        'ProjectType':"Personal Project",
        'Description':"An Intelligent job board powered by artificial intelligence. The job board lists job postings extracted from LinkedIn. Document Embeddings generated from the T5 model are used alongside the Elastic Search vector search to show job postings with similar skill requirements. User interface built on React with Material UI library. Backend logic developed using Python with FastAPI web framework. ",
        'Details': (<div>
            <ul>
                <li>Designed and implemented an intelligent job board that uses job descriptions extracted from LinkedIn</li>
                <li>Developed web scraping logic using Python to extract job descriptions matching a keyword and location</li>
                <li>Incorporated Named-entity recognition language models, allowing the efficient search of job postings based on skills</li>
                <li>Currently developing natural language search using OpenAI function calls, enabling users to generate search results through human-like natural language queries</li>
            </ul>
        </div>),
        'Images':IntelliBImages,
    },
    {
        'Key':2,
        'Title': "Personal Expense Analyzer",
        'ProjectType':"Personal Project",
        'Description':"A web application for analyzing bank and credit card statements in India. Built with React (Blueprint.js and Evergreen-UI), Spring Boot, and MongoDB. Developed insightful visualizations for time series and cluster analysis with D3.js",
        'Details': (<div>
                    <ul>
                        <li>Developed web application to read and analyse personal expenses from bank statements</li>
                        <li>Designed a generic algorithm to read statements of different banks and credit cards used in India</li>
                        <li>Created plots for time series and clustering analysis using d3.js</li>
                    </ul>
        </div>),
        'Images':ExpenseAImages,
        ghLink:"https://github.com/jessjosephbenny/expense-analyser-server"
    },
    {
        'Key':3,
        'Title': "Fakenews Classifier",
        'ProjectType':"Academic Thesis",
        'Description':"Implementation of my academic thesis ' Knowledge Informed Fakenews Detection using Large Language Models.' Proposed and Implemented a novel methodology for fake news detection by incorporating Large Language Models and Knowledge Graphs. The proposed method uses knowledge graphs to capture external knowledge and LLMs to generate context-aware document representations leveraging real-world knowledge LLM gained during the pre-training process. Methodology achieved 94 percent detection accuracy on FakeNewsNet Dataset. ",
        'Details': (<div>
                    <ul>
                        <li>Proposed a novel knowledge-informed fake news detection model with 94% accuracy using an ensemble of knowledge graph embeddings and word embeddings from Large Language Models (LLMs)</li>
                        <li>Evaluated model performance with diverse LLMs, including GPT, Google T5, Ernie, and BERT</li>
                        <li>Incorporated various knowledge graph embeddings, such as TransE, RotatE, and SimplE, to capture external knowledge and enhance context understanding</li>
                        <li>Applied natural language preprocessing techniques like n-grams and latent semantic analysis to improve data quality</li>
                    </ul>
        </div>),
        'Images':FakenewsImages,
    }
]
export default projectData