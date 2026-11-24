# Portfolio Research

Source: read-only inspection of the ten local repositories' README files, source files, dependency manifests, and selected dataset headers. Repository links were verified from their local Git remotes. No project code was run, no model metrics were reproduced, and serialized model files were not inspected. Rankings are comparative editorial judgments for portfolio presentation, not measured quality scores.

## Ranking

| Rank | Project | Technical quality | Internship relevance | Rationale |
|---:|---|---|---|---|
| 1 | [Multimodal Assistant](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT) | High | High | Most complete explicit pipeline: image evidence extraction, ambiguity handling, language detection, response validation, and UI traceability. |
| 2 | [arXiv CS Chatbot](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT) | High | High | Combines data preparation, embeddings, vector retrieval, local LLM generation, conversation context, keyword extraction, and visualization. |
| 3 | [Medical QA Chatbot](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT) | High | High | RAG application with an incremental, content-hash-based knowledge updater and scheduler; medical answers still require appropriate caution. |
| 4 | [Real-Time Fraud Detector](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector) | Medium-high | High | Shows imbalanced classification, preprocessing, serialized inference assets, TCP transaction replay, and a live dashboard; the stream is simulated. |
| 5 | [Customer Churn Predictor](https://github.com/prakharmadhesiya2620-cloud/customer-churn-predictor) | Medium | High | End-to-end logistic-regression training and a prediction UI, with explicit preprocessing and feature ordering; source training data is absent. |
| 6 | [AI Voice Assistant](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant) | Medium | Medium-high | Integrates wake-word detection, microphone capture, speech recognition, local LLM responses, speech synthesis, threading, and a desktop HUD. |
| 7 | [Customer Service Chatbot](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT) | Medium | Medium | Demonstrates local retrieval-based customer Q&A, prompt-structured sentiment responses, and Streamlit counters; dependency declarations need reconciliation. |
| 8 | [Trading Bot](https://github.com/prakharmadhesiya2620-cloud/trading_bot) | Medium | Medium | Clear CLI/client/order separation, input validation, signed HTTP requests, and testnet order submission; it implements order execution, not a trading strategy. |
| 9 | [AI Core Foundation Pipeline](https://github.com/prakharmadhesiya2620-cloud/my-first-ai-project) | Low-medium | Low-medium | A readable, dependency-free demonstration of basic matrix profiling and accuracy-history summaries; it uses mock data. |
| 10 | [Numpy](https://github.com/prakharmadhesiya2620-cloud/Numpy) | Low | Low | A notebook of introductory NumPy array exercises rather than a packaged application. |

## Project summaries

### 1. Multimodal Assistant

- **Repository:** [MULTIMODAL_ASSISTANT](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT)
- **Description:** A Streamlit text-and-image assistant that makes parts of its response process visible. It extracts structured image evidence, checks ambiguity, generates an answer, validates claims against evidence, and checks the response language.
- **Verified technologies:** Python; Streamlit; Ollama (`llava` for vision and `llama3.2` for text); Pillow; `langdetect`. The language helper also implements Unicode-script and punctuation heuristics before statistical detection.
- **Implemented features/algorithms:** Structured image-evidence extraction; recent-turn and image-evidence conversation context; language and per-sentence mixed-language detection; LLM ambiguity decision; evidence-grounded prompt generation; separate evidence and language validation stages; UI reasoning traces.
- **Limitations:** LLM-based interpretation and validation are fallible, as the README acknowledges. Conversation context is stored in Streamlit session state, not durable storage. The declared language-detection and image libraries do not guarantee accurate results across all inputs.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT/blob/main/README.md), [src/main.py](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT/blob/main/src/main.py), [src/reasoning_engine.py](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT/blob/main/src/reasoning_engine.py), [src/vision_helper.py](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT/blob/main/src/vision_helper.py), [src/language_helper.py](https://github.com/prakharmadhesiya2620-cloud/MULTIMODAL_ASSISTANT/blob/main/src/language_helper.py).

### 2. arXiv CS Chatbot

- **Repository:** [ARXIV_CS_CHATBOT](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT)
- **Description:** A Streamlit research assistant that prepares a category-filtered arXiv subset and provides semantic search and LLM-assisted exploration of paper abstracts.
- **Verified technologies:** Python; Streamlit; LangChain and LangChain Community/Core; FAISS; HuggingFace sentence-transformer embeddings (`all-MiniLM-L6-v2`); Ollama (`llama3.2`); Pandas; scikit-learn PCA; Plotly; YAKE; tqdm.
- **Implemented features/algorithms:** Streaming JSONL parsing; category-prefix filtering and optional seeded random sampling; dense embeddings and FAISS similarity retrieval; summaries and contextual Q&A with the last three turns; unsupervised YAKE keyword extraction; sampled embedding projection with PCA.
- **Limitations:** The source CSV is present, but a generated FAISS index is not. The full raw arXiv metadata input described by the documentation is not included. The answer prompt allows general model knowledge when retrieved context is incomplete, so answers are not exclusively corpus-grounded. README performance claims were not independently tested.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT/blob/main/README.md), [data_prep.py](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT/blob/main/data_prep.py), [src/arxiv_helper.py](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT/blob/main/src/arxiv_helper.py), [src/main.py](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT/blob/main/src/main.py), [requirements.txt](https://github.com/prakharmadhesiya2620-cloud/ARXIV_CS_CHATBOT/blob/main/requirements.txt).

### 3. Medical QA Chatbot

- **Repository:** [MEDICAL_QA_CHATBOT](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT)
- **Description:** A Streamlit question-answering interface over a MedQuAD CSV dataset, using local vector retrieval and an Ollama language model. Separate scripts support incremental ingestion of additional CSV/TXT files.
- **Verified technologies:** Python; Streamlit; LangChain, LangChain Community/Core/Classic; FAISS; HuggingFace sentence-transformer embeddings (`all-MiniLM-L6-v2`); Ollama (`llama3.2`); `schedule`; Python standard-library JSON and SHA-256 hashing.
- **Implemented features/algorithms:** CSV-based FAISS knowledge-base creation; top-three retrieval; prompt-structured answer and entity extraction; incoming-file discovery; content-hash manifest for duplicate detection; incremental `add_documents()` updates; optional periodic scheduler.
- **Limitations:** A generated vector index and manifest are not present in the inspected tree. The updater loads CSV documents or text files but does not implement a text-splitting/chunking stage, despite the README's chunking description. The UI does not preserve multi-turn conversation or display retrieved sources. The included CSV's physical line count differs from the README's stated pair count; line count is not treated as an authoritative record count. The README correctly cautions that this is not a substitute for professional medical advice.
- **Evidence:** [Readme.md](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT/blob/main/Readme.md), [src/langchain_helper.py](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT/blob/main/src/langchain_helper.py), [src/knowledge_updater.py](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT/blob/main/src/knowledge_updater.py), [src/schedule_updates.py](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT/blob/main/src/schedule_updates.py), [requirements.txt](https://github.com/prakharmadhesiya2620-cloud/MEDICAL_QA_CHATBOT/blob/main/requirements.txt).

### 4. Real-Time Fraud Detector

- **Repository:** [realtime-fraud-detector](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector)
- **Description:** A transaction-classification demo comprising a model-training script, local TCP transaction replay server, and Streamlit inference dashboard.
- **Verified technologies:** Python; Streamlit; Pandas; NumPy; scikit-learn; joblib; Python standard-library sockets, JSON, time, and random.
- **Implemented features/algorithms:** Stratified train/test split; standardization of `Amount`; class-weighted Random Forest (`balanced_subsample`); classification report, PR-AUC and ROC-AUC calculation in the training script; newline-delimited JSON over a local TCP socket; dashboard metrics, rolling chart, alerts, and local breach logging.
- **Limitations:** The data streamer replays records from a dataset and intentionally injects fraud examples; it is not connected to a live bank feed. The documented training dataset is absent, while serialized model assets are present. README metric values were not reproduced or validated. A requirements manifest is absent.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector/blob/main/README.md), [scripts/train_detector.py](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector/blob/main/scripts/train_detector.py), [scripts/transaction_stream.py](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector/blob/main/scripts/transaction_stream.py), [scripts/app.py](https://github.com/prakharmadhesiya2620-cloud/realtime-fraud-detector/blob/main/scripts/app.py).

### 5. Customer Churn Predictor

- **Repository:** [customer-churn-predictor](https://github.com/prakharmadhesiya2620-cloud/customer-churn-predictor)
- **Description:** A Streamlit banking-customer churn demo backed by a scikit-learn logistic-regression training script and serialized model artifacts.
- **Verified technologies:** Python; Streamlit; Pandas; NumPy; scikit-learn (`LogisticRegression`, `StandardScaler`, train/test split and metrics); joblib.
- **Implemented features/algorithms:** Drops identifier fields; fills missing numeric values with medians; one-hot encodes geography and gender; scales four continuous fields; fixes an 11-feature order; trains and evaluates logistic regression; provides a UI for individual predictions.
- **Limitations:** The script expects `churn_data.csv`, which is not included. The UI substitutes constants for product count, card ownership, active-member status, and salary rather than collecting those values. `feature_blueprint.pkl` is present but is not used by the inspected UI. The README's model metrics were not reproduced. A requirements manifest is absent.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/customer-churn-predictor/blob/main/README.md), [pipeline.py](https://github.com/prakharmadhesiya2620-cloud/customer-churn-predictor/blob/main/pipeline.py), [app.py](https://github.com/prakharmadhesiya2620-cloud/customer-churn-predictor/blob/main/app.py).

### 6. AI Voice Assistant

- **Repository:** [AI-Voice-Assistant](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant)
- **Description:** A Python desktop assistant with a wake-word listener, speech command handling, local Ollama response generation, speech synthesis, and a telemetry HUD.
- **Verified technologies:** Python; CustomTkinter/Tkinter; NumPy; PvRecorder; openWakeWord and ONNX model; SpeechRecognition; pyttsx3/SAPI5; Ollama client; psutil; Python threading.
- **Implemented features/algorithms:** Custom `.onnx` wake-word model loading; microphone-frame processing; score threshold for wake detection; Google speech-recognition call for command transcription; Ollama chat response; threaded TTS and request handling; HUD status/log updates and CPU/RAM display.
- **Limitations:** Although the README describes a completely local assistant, command transcription calls `recognize_google`, an external service. No requirements manifest is present. README setup instructions include an inconsistent directory name. The README and code have a trigger-name mismatch in their displayed wake-word messaging.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant/blob/main/README.md), [voice_engine.py](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant/blob/main/voice_engine.py), [gui_dashboard.py](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant/blob/main/gui_dashboard.py), [main.py](https://github.com/prakharmadhesiya2620-cloud/AI-Voice-Assistant/blob/main/main.py).

### 7. Customer Service Chatbot

- **Repository:** [CUSTOMER_SERVICE_CHATBOT](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT)
- **Description:** A Streamlit customer-support Q&A demo that retrieves from a CSV knowledge base and asks a local LLM to produce a sentiment-aware answer.
- **Verified technologies:** Python; Streamlit; LangChain, LangChain Community/Core/Classic; FAISS; HuggingFace sentence-transformer embeddings (`all-MiniLM-L6-v2`); Ollama (`llama3.2`); Pandas-backed CSV loading; python-dotenv.
- **Implemented features/algorithms:** CSV-to-FAISS indexing; retrieval QA; prompt-defined sentiment/emotion/answer output format; Streamlit session counters updated by parsing the generated response. Included CSV header is `prompt,response`.
- **Limitations:** Sentiment is inferred through the LLM prompt and response-text parsing, not a separately trained sentiment classifier. The requirements manifest includes `google-generativeai` while the source uses Ollama, and the source imports `langchain_classic` although the manifest does not declare `langchain-classic`. The README's claimed analytics and privacy properties were not independently verified. A generated vector index is not present.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT/blob/main/README.md), [src/langchain_helper.py](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT/blob/main/src/langchain_helper.py), [src/main.py](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT/blob/main/src/main.py), [requirements.txt](https://github.com/prakharmadhesiya2620-cloud/CUSTOMER_SERVICE_CHATBOT/blob/main/requirements.txt).

### 8. Trading Bot

- **Repository:** [trading_bot](https://github.com/prakharmadhesiya2620-cloud/trading_bot)
- **Description:** A command-line client that validates order parameters and submits market or limit orders to the Binance Futures testnet.
- **Verified technologies:** Python; Click; Requests; Python standard-library `hmac`, `hashlib`, `urllib.parse`, `time`, `logging`, and environment access.
- **Implemented features/algorithms:** CLI option parsing; basic symbol/side/type/quantity/limit-price validation; HMAC-SHA256 signed requests; testnet endpoint; market and GTC limit order payloads; response handling and file/console logging.
- **Limitations:** Implements order submission, not a trading signal or strategy, portfolio/risk management, or live-market execution. Validation does not implement exchange-specific symbol filters or quantity/price precision rules. Credential configuration includes fallback handling; review the local configuration before use and supply testnet credentials through the intended environment variables. No credential values are reproduced here.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/README.md), [main.py](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/main.py), [bot/client.py](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/bot/client.py), [bot/orders.py](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/bot/orders.py), [bot/validators.py](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/bot/validators.py), [requirements.txt](https://github.com/prakharmadhesiya2620-cloud/trading_bot/blob/main/requirements.txt).

### 9. AI Core Foundation Pipeline

- **Repository:** [my-first-ai-project](https://github.com/prakharmadhesiya2620-cloud/my-first-ai-project)
- **Description:** A small, dependency-free Python demonstration of manually profiling a feature matrix and summarizing mock accuracy history.
- **Verified technologies:** Python 3 and built-in language features; no external libraries or framework.
- **Implemented features/algorithms:** Computes row/column counts, flattens a matrix, finds global min/max, and calculates mean/peak for a supplied accuracy list.
- **Limitations:** Uses hard-coded mock data; it does not train or evaluate a machine-learning model. Matrix profiling assumes rectangular, non-empty data when calculating min/max; the error handling is only around accuracy-history processing.
- **Evidence:** [README.md](https://github.com/prakharmadhesiya2620-cloud/my-first-ai-project/blob/main/README.md), [main.py](https://github.com/prakharmadhesiya2620-cloud/my-first-ai-project/blob/main/main.py).

### 10. Numpy

- **Repository:** [Numpy](https://github.com/prakharmadhesiya2620-cloud/Numpy)
- **Description:** A Python 3 Jupyter notebook containing introductory NumPy array exercises.
- **Verified technologies:** Python 3 notebook; NumPy.
- **Implemented features/algorithms:** Array creation; standard deviation; reshape, flatten, and transpose; zeros/ones/identity arrays; ranges and random values; sorting, unique values, concatenation, and splitting.
- **Limitations:** Notebook-only learning exercises, with no README, dependency manifest, package structure, or application entry point.
- **Evidence:** [Untitled4.ipynb](https://github.com/prakharmadhesiya2620-cloud/Numpy/blob/main/Untitled4.ipynb).

## Portfolio-wide notes

- **Verified repeated strengths:** Python, local LLM integration, Streamlit, retrieval/vector search, data preparation, scikit-learn classification, and model-backed interfaces.
- **Not represented as verified:** Any performance metric not independently tested, production deployment, live financial-network integration, or claims that an LLM-generated output is guaranteed accurate.
- **Repository changes:** None. This research document is a portfolio artifact, not a modification to any original project.
