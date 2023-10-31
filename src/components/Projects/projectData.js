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

//Images for Music Generation
import MusicRNN1 from "../../Assets/Projects/MusicRNN.jpeg"

//Images for Covid Vaccine
import CovidVaccine1 from "../../Assets/Projects/CoWINAlert.png"

//Images for Search Enginer
import SearchEngine1 from "../../Assets/Projects/SeachEngine.png"


const ExpenseAImages = [ExpenseA1,ExpenseA2,ExpenseA3, ExpenseA4]
const IntelliBImages = [IntelliB1]
const FakenewsImages = [Fakenews1]
const SearchEngineImages = [SearchEngine1]
const MusicRNNImages = [MusicRNN1]
const CoWINAlertImages = [CovidVaccine1]


const projectData = [
    {
        'Key':1,
        'Title': "Intelliboard",
        'ProjectType':"Personal Project",
        'Description':"A job board application powered by artificial intelligence. The job board lists job postings extracted from LinkedIn. The named entity recognition technique is used to highlight skills from the job description. Document embeddings generated utilizing the T5 language model indexed using the Elastic Search Vector plugin to show other job postings with similar skills. User interface built on React using Material UI library. Backend logic developed on Python using FastAPI web framework. ",
        'Details': (<div>
            <ul>
                <li>Designed and implemented an intelligent job board that uses job descriptions extracted from LinkedIn</li>
                <li>Developed web scraping logic using Python to extract job descriptions matching a keyword and location</li>
                <li>Incorporated Named-entity recognition language model, allowing the efficient search of job postings based on skills</li>
                <li>Currently developing natural language search using OpenAI function calls, enabling users to generate search results through human-like natural language queries</li>
            </ul>
        </div>),
        'Images':IntelliBImages,
        'Color':'Blue'
    },
    {
        'Key':2,
        'Title': "Fakenews Classifier",
        'ProjectType':"Academic Thesis",
        'Description':"Implementation of my academic thesis ' Knowledge Informed Fakenews Detection using Large Language Models.' Proposed and Implemented a novel methodology for fake news detection by incorporating Large Language Models and Knowledge Graphs.  Methodology achieved 94 percent detection accuracy on FakeNewsNet Dataset. ",
        'Details': (<div>
                    <ul>
                        <li>Proposed a novel knowledge-informed fake news detection model with 94% accuracy using an ensemble of knowledge graph embeddings and word embeddings from Large Language Models (LLMs)</li>
                        <li>Evaluated model performance with diverse LLMs, including GPT, Google T5, Ernie, and BERT</li>
                        <li>Incorporated various knowledge graph embedding techniques, such as TransE, RotatE, and SimplE, to capture external knowledge and enhance context understanding</li>
                        <li>Applied natural language preprocessing techniques like n-grams and latent semantic analysis to perform statistical analysis of fake news</li>
                    </ul>
        </div>),
        'Images':FakenewsImages,
        'Color':'Red'
    },
    {
        'Key':3,
        'Title': "Personal Expense Analyzer",
        'ProjectType':"Personal Project",
        'Description':"A web application for analyzing bank and credit card statements in India. Built with React (Blueprint.js and Evergreen-UI), Spring Boot, and MongoDB. Developed insightful visualizations for time series and cluster analysis of spendings using D3.js",
        'Details': (<div>
                    <ul>
                        <li>Developed web application to read and analyse personal expenses from bank statements</li>
                        <li>Designed a generic algorithm to read statements of different banks and credit cards used in India</li>
                        <li>Created plots for time series and clustering analysis using d3.js</li>
                    </ul>
        </div>),
        'Images':ExpenseAImages,
        ghLink:"https://github.com/jessjosephbenny/expense-analyser-server",
        'Color':'Blue'
    },
    {
        'Key':4,
        'Title': "Deep Learning Music Generation Model",
        'ProjectType':"Academic Project",
        'Description':"An academic project in which we reimplemented multiple state-of-the-art deep-learning models for automatic music generation. We have implemented models based on diverse machine learning techniques, including Recurrent Neural Networks (RNNs), Generative Adversarial Networks (GANs), and Convolutional Neural Networks (CNNs). ",
        'Details': (<div>
                    <ul>
                        <li>Implemented automatic music generation deep learning models to generate new soothing music compositions</li>
                        <li>Implemented multiple models employing diverse machine learning techniques, including Recurrent Neural Networks (RNNs), Generative Adversarial Networks (GANs), and Convolutional Neural Networks (CNNs)</li>
                        <li>Developed data preprocessing pipeline to convert MIDI format music into time-series tensor data, enabling effective input for the deep learning model</li>
                        <li>Conducted thorough performance evaluations to assess the quality, creativity, and authenticity of the generated musical pieces</li>
                    </ul>
        </div>),
        'Images':MusicRNNImages,
        'Color':'Red'
    },
    {
        'Key':5,
        'Title': "Covid Vaccine Slot Alert System",
        'ProjectType':"Personal Project",
        'Description':"An alert system which will send email notifications when vaccination slots are available at different vaccination centers in India. The alert system uses time-triggered Azure Functions to ping CoWIN public APIs published by the Government of India to retrieve available slots. ",
        'Details': null,
        'Images':CoWINAlertImages,
        'Color':'Blue'
    },
    {
        'Key':6,
        'Title': "DBLP Search Engine",
        'ProjectType':"Academic Project",
        'Description':"A search engine built on Apache Lucene indexed with research papers and journals from DBLP. The search engine comes with features including spelling correction, highlighting, a Word2Vec engine to refine queries, cluster documents, and implement semantic searching. ",
        'Details': null,
        'Images':SearchEngineImages,
        'Color':'Red'
    }
]
export default projectData