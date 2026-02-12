export const mlProjects = {
  title: "ML / Deep Learning",
  subtitle: "Machine Learning & AI Engineering",
  icon: "🧠",
  description:
    "Build intelligent systems from classical ML to cutting-edge deep learning and LLM applications.",
  tiers: [
    {
      name: "Beginner",
      color: "green",
      projects: [
        {
          id: "ml-1",
          title: "Credit Card Fraud Detector (Imbalanced Data)",
          description:
            "Build a fraud detection system handling extreme class imbalance (99.8% legitimate). Use SMOTE oversampling, anomaly detection (Isolation Forest), ensemble methods, and evaluate with precision-recall curves instead of accuracy.",
          techStack: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
          concepts: [
            "Class imbalance handling (SMOTE, undersampling)",
            "Anomaly detection (Isolation Forest)",
            "Precision-Recall vs ROC curves",
            "Feature engineering on transaction data",
            "Cross-validation strategies for imbalanced data",
          ],
          videos: [
            {
              name: "Credit Card Fraud Detection with ML in Python + Streamlit Deployment",
              url: "https://www.youtube.com/watch?v=M-VfH9gJw-Y",
              channel: "Thu Vu Data Analytics",
            },
            {
              name: "Credit Card Fraud Detection Using ML (Random Forest + Cross-Validation)",
              url: "https://www.youtube.com/watch?v=P2KGafsFJOk",
              channel: "DataProfessor",
            },
            {
              name: "Fraud Detection ML — Full Python Data Science Project (94% Accuracy)",
              url: "https://www.youtube.com/watch?v=5Kc2t7gWLsE",
              channel: "Harshit Bais",
            },
          ],
          resources: [
            {
              name: "Kaggle: Credit Card Fraud Dataset",
              url: "https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud",
              d: "E",
            },
            {
              name: "Handling Imbalanced Data (Google ML)",
              url: "https://developers.google.com/machine-learning/data-prep/construct/sampling-splitting/imbalanced-data",
              d: "M",
            },
            {
              name: "SMOTE Explained",
              url: "https://machinelearningmastery.com/smote-oversampling-for-imbalanced-classification/",
              d: "M",
            },
          ],
          milestones: [
            "EDA & class distribution analysis",
            "Feature scaling & preprocessing",
            "Baseline model (Logistic Regression)",
            "SMOTE oversampling implementation",
            "Isolation Forest anomaly detector",
            "Ensemble model (Random Forest + XGBoost)",
            "Precision-Recall curve evaluation",
            "Threshold tuning for business needs",
          ],
        },
        {
          id: "ml-2",
          title: "AI-Powered Resume Parser & Ranker",
          description:
            "An NLP pipeline that extracts structured data from resumes (skills, experience, education) using Named Entity Recognition, then ranks candidates against a job description using similarity scoring.",
          techStack: ["Python", "spaCy", "FastAPI", "Hugging Face"],
          concepts: [
            "Named Entity Recognition (NER)",
            "Custom NER model training",
            "TF-IDF / sentence embeddings",
            "Cosine similarity ranking",
            "PDF/DOCX text extraction",
          ],
          videos: [
            {
              name: "Build Resume Parser using Spacy v3 — NER Project (Full Build)",
              url: "https://www.youtube.com/watch?v=I2BbI-984CI",
              channel: "ROOMYAN",
            },
            {
              name: "Resume (CV) Parsing with spaCy 3 — NER Training",
              url: "https://www.youtube.com/watch?v=3ygugMrc3EM",
              channel: "KGP Talkie",
            },
            {
              name: "Resume Parser Using Python & NLP — Extract Skills, Education",
              url: "https://www.youtube.com/watch?v=aI-QXg7xhmw",
              channel: "Let's Talk About Data",
            },
          ],
          resources: [
            {
              name: "spaCy: Custom NER Training",
              url: "https://spacy.io/usage/training",
              d: "M",
            },
            {
              name: "Sentence Transformers for Similarity",
              url: "https://www.sbert.net/",
              d: "M",
            },
            {
              name: "PyMuPDF for PDF Extraction",
              url: "https://pymupdf.readthedocs.io/",
              d: "E",
            },
          ],
          milestones: [
            "PDF/DOCX text extraction pipeline",
            "Rule-based entity extraction (regex)",
            "Custom spaCy NER model for resume entities",
            "Structured JSON output (name, skills, experience, education)",
            "Job description parser",
            "Candidate-JD similarity scoring",
            "Ranked candidate list with explanations",
            "FastAPI REST endpoint",
          ],
        },
      ],
    },
    {
      name: "Intermediate",
      color: "yellow",
      projects: [
        {
          id: "ml-3",
          title: "Real-Time Pose Estimation Fitness Tracker",
          description:
            "A computer vision app that detects body poses in real-time using MediaPipe/OpenPose, counts exercise repetitions, evaluates form quality, and provides corrective feedback — deployed as a web app.",
          techStack: ["Python", "MediaPipe", "OpenCV", "Flask/Streamlit"],
          concepts: [
            "Pose landmark detection (33 keypoints)",
            "Joint angle calculation",
            "State machine for rep counting",
            "Form quality scoring algorithms",
            "Real-time video processing",
          ],
          videos: [
            {
              name: "AI Pose Estimation with Python and MediaPipe + AI Gym Tracker",
              url: "https://www.youtube.com/watch?v=06TE_U21FK4",
              channel: "Nicholas Renotte",
            },
            {
              name: "Pose Estimation Tutorial — MediaPipe + Python",
              url: "https://www.youtube.com/watch?v=brwgBf6VB0I",
              channel: "Murtaza's Workshop",
            },
          ],
          resources: [
            {
              name: "MediaPipe Pose Detection",
              url: "https://ai.google.dev/edge/mediapipe/solutions/vision/pose_landmarker",
              d: "M",
            },
            {
              name: "OpenPose: Real-Time Pose Estimation",
              url: "https://github.com/CMU-Perceptual-Computing-Lab/openpose",
              d: "M",
            },
            {
              name: "Streamlit for ML Demos",
              url: "https://streamlit.io/",
              d: "E",
            },
          ],
          milestones: [
            "MediaPipe pose detection on webcam feed",
            "Extract 33 body landmarks in real-time",
            "Calculate joint angles (elbow, knee, hip)",
            "Rep counter state machine (up/down detection)",
            "Support multiple exercises (squat, pushup, curl)",
            "Form quality scoring (angle thresholds)",
            "Visual feedback overlay on video",
            "Web deployment with Streamlit/Flask",
          ],
        },
        {
          id: "ml-4",
          title: "Document OCR + Auto-Summarization Pipeline",
          description:
            "An end-to-end pipeline: OCR to extract text from scanned documents/images (Tesseract/PaddleOCR), clean and structure the text, then summarize using transformer models. Deployed as a REST API.",
          techStack: [
            "Python",
            "Tesseract/PaddleOCR",
            "Transformers",
            "FastAPI",
          ],
          concepts: [
            "Optical Character Recognition (OCR)",
            "Image preprocessing for OCR quality",
            "Text cleaning & structure detection",
            "Abstractive summarization (BART/T5)",
            "API design for ML pipelines",
          ],
          videos: [
            {
              name: "OCR in Python — Tesseract + OpenCV (Full Tutorial)",
              url: "https://www.youtube.com/watch?v=PY_N1XdFp4w",
              channel: "Murtaza's Workshop",
            },
            {
              name: "Text Summarization with Hugging Face Transformers",
              url: "https://www.youtube.com/watch?v=JlIF4dFBRBg",
              channel: "Hugging Face",
            },
            {
              name: "Python Tesseract OCR — Quick Start",
              url: "https://www.youtube.com/watch?v=0irmq71_-bI",
              channel: "NeuralNine",
            },
          ],
          resources: [
            {
              name: "Tesseract OCR Best Practices",
              url: "https://tesseract-ocr.github.io/tessdoc/",
              d: "M",
            },
            {
              name: "PaddleOCR (State-of-the-Art)",
              url: "https://github.com/PaddlePaddle/PaddleOCR",
              d: "M",
            },
            {
              name: "Hugging Face Summarization",
              url: "https://huggingface.co/docs/transformers/tasks/summarization",
              d: "M",
            },
          ],
          milestones: [
            "Image preprocessing (deskew, denoise, binarize)",
            "OCR with Tesseract on clean images",
            "PaddleOCR for complex layouts",
            "Text cleaning & paragraph detection",
            "Extractive summarization (TextRank)",
            "Abstractive summarization (BART/T5)",
            "Multi-page document handling",
            "FastAPI endpoint with file upload",
          ],
        },
        {
          id: "ml-5",
          title: "Music Generation with RNNs/Transformers",
          description:
            "Train a neural network to generate original music. Process MIDI files into sequences, train LSTM/Transformer models on musical patterns, and output playable MIDI or audio files.",
          techStack: ["Python", "PyTorch", "Music21", "MIDI"],
          concepts: [
            "MIDI file parsing & tokenization",
            "Sequence-to-sequence modeling",
            "LSTM / Transformer architecture",
            "Temperature-based sampling",
            "Music theory encoding (notes, chords, duration)",
          ],
          videos: [
            {
              name: "AI Music Composer — Deep Learning + Python (Google Colab)",
              url: "https://www.youtube.com/watch?v=aOxE-pYNJg8",
              channel: "Data Science Garage",
            },
            {
              name: "How to Generate Music with AI — Intro to Deep Learning #9",
              url: "https://www.youtube.com/watch?v=4DMm5Lhey1U",
              channel: "Siraj Raval",
            },
            {
              name: "Generating Melodies with LSTM Nets — Series Overview",
              url: "https://www.youtube.com/watch?v=FLr0r7QhNVw",
              channel: "Valerio Velardo",
            },
          ],
          resources: [
            {
              name: "Music21: Computational Music Library",
              url: "https://web.mit.edu/music21/",
              d: "M",
            },
            {
              name: "Magenta by Google (Reference)",
              url: "https://magenta.tensorflow.org/",
              d: "M",
            },
            {
              name: "The Illustrated Transformer",
              url: "https://jalammar.github.io/illustrated-transformer/",
              d: "M",
            },
          ],
          milestones: [
            "MIDI file parser (extract notes, timing, velocity)",
            "Sequence tokenization (note + duration encoding)",
            "Dataset preparation from MIDI corpus",
            "LSTM model for sequence prediction",
            "Transformer model comparison",
            "Temperature-controlled generation",
            "MIDI output file generation",
            "Web player for generated music",
          ],
        },
      ],
    },
    {
      name: "Advanced",
      color: "red",
      projects: [
        {
          id: "ml-6",
          title: "AI Code Reviewer (Static Analysis + LLM)",
          description:
            "An automated code review tool that combines AST-based static analysis with LLM-powered suggestions. Detects code smells, security vulnerabilities, performance issues, and generates natural language review comments.",
          techStack: [
            "Python",
            "Tree-sitter",
            "GPT-4/Claude API",
            "FastAPI",
            "GitHub API",
          ],
          concepts: [
            "Abstract Syntax Tree (AST) parsing",
            "Static analysis rule engine",
            "LLM prompt engineering for code review",
            "GitHub PR webhook integration",
            "Code diff analysis",
          ],
          videos: [
            {
              name: "Build an AI Code Reviewer with Python + OpenAI API",
              url: "https://www.youtube.com/results?search_query=build+ai+code+reviewer+python+openai+api",
              channel: "Various",
            },
            {
              name: "Build an AI-Powered Code Review Bot — LLM + GitHub",
              url: "https://www.youtube.com/results?search_query=ai+code+review+bot+llm+github+python+tutorial",
              channel: "Various",
            },
            {
              name: "GitHub Apps & Webhooks — Building Integrations",
              url: "https://www.youtube.com/results?search_query=github+app+webhooks+tutorial+build+integration",
              channel: "GitHub",
            },
          ],
          resources: [
            {
              name: "Tree-sitter: Incremental Parser",
              url: "https://tree-sitter.github.io/tree-sitter/",
              d: "M",
            },
            {
              name: "OpenAI API for Code Analysis",
              url: "https://platform.openai.com/docs/guides/code",
              d: "M",
            },
            {
              name: "GitHub PR Webhooks",
              url: "https://docs.github.com/en/webhooks",
              d: "M",
            },
            {
              name: "Semgrep: Static Analysis (Reference)",
              url: "https://semgrep.dev/docs/",
              d: "M",
            },
          ],
          milestones: [
            "AST parser for Python/JavaScript (Tree-sitter)",
            "Rule-based code smell detection",
            "Security vulnerability patterns",
            "LLM-powered review comment generation",
            "Code diff extraction from GitHub PRs",
            "GitHub webhook integration",
            "Inline review comments via GitHub API",
            "Configurable rule severity levels",
          ],
        },
        {
          id: "ml-7",
          title: "Multi-Camera Object Tracking System",
          description:
            "Track objects (people/vehicles) across multiple camera feeds in real-time. Uses YOLO for detection, DeepSORT for single-camera tracking, and re-identification embeddings for cross-camera handoff.",
          techStack: ["Python", "PyTorch", "YOLOv8", "DeepSORT", "OpenCV"],
          concepts: [
            "Object detection (YOLOv8)",
            "Multi-object tracking (DeepSORT)",
            "Re-identification with embeddings",
            "Kalman filter for motion prediction",
            "Cross-camera coordinate mapping",
          ],
          videos: [
            {
              name: "YOLOv8 + DeepSORT Object Tracking — Full Python Tutorial",
              url: "https://www.youtube.com/results?search_query=yolov8+deepsort+object+tracking+python+tutorial",
              channel: "Various",
            },
            {
              name: "Real-Time Multi-Object Tracking with YOLOv8",
              url: "https://www.youtube.com/results?search_query=real+time+multi+object+tracking+yolov8+python",
              channel: "Various",
            },
            {
              name: "YOLOv8 Object Detection — Getting Started (Ultralytics)",
              url: "https://www.youtube.com/results?search_query=yolov8+object+detection+tutorial+ultralytics",
              channel: "Ultralytics",
            },
          ],
          resources: [
            {
              name: "YOLOv8 by Ultralytics",
              url: "https://docs.ultralytics.com/",
              d: "M",
            },
            {
              name: "DeepSORT Paper & Implementation",
              url: "https://github.com/nwojke/deep_sort",
              d: "M",
            },
            {
              name: "Person Re-Identification Survey",
              url: "https://arxiv.org/abs/2001.04193",
              d: "H",
            },
          ],
          milestones: [
            "YOLOv8 object detection on video feed",
            "DeepSORT tracker with Kalman filter",
            "Unique ID assignment per tracked object",
            "Re-ID embedding extractor (ResNet backbone)",
            "Cross-camera ID matching",
            "Real-time visualization with bounding boxes + IDs",
            "Track history & trajectory visualization",
            "Multi-camera dashboard view",
          ],
        },
        {
          id: "ml-8",
          title: "Fine-Tuned LLM with RAG on Custom Knowledge Base",
          description:
            "Fine-tune an open-source LLM (LLaMA/Mistral) with LoRA on domain-specific data, build a RAG pipeline with vector database (Chroma/Pinecone), and deploy as a chatbot with citation support.",
          techStack: [
            "Python",
            "PyTorch",
            "Hugging Face",
            "LangChain",
            "ChromaDB",
            "FastAPI",
          ],
          concepts: [
            "LoRA/QLoRA parameter-efficient fine-tuning",
            "Vector embeddings & similarity search",
            "Retrieval-Augmented Generation (RAG)",
            "Prompt engineering & chain-of-thought",
            "Chunking strategies for documents",
          ],
          videos: [
            {
              name: "Python RAG Tutorial with Local LLMs — AI for Your PDFs",
              url: "https://www.youtube.com/watch?v=2TJxpyO3ei4",
              channel: "Pixegami",
            },
            {
              name: "How to Fine-Tune a Model Using LoRA (step by step)",
              url: "https://www.youtube.com/watch?v=eC6Hd1hFvos",
              channel: "Svpino",
            },
            {
              name: "RAG from Scratch — Full Course (LangChain)",
              url: "https://www.youtube.com/watch?v=sVcwVQRHIc8",
              channel: "freeCodeCamp",
            },
            {
              name: "How to Fine Tune Your Own LLM with LoRA (Custom Dataset)",
              url: "https://www.youtube.com/watch?v=iOdFUJiB0Zc",
              channel: "Nick Nochnack",
            },
          ],
          resources: [
            {
              name: "Hugging Face: Fine-Tuning with LoRA",
              url: "https://huggingface.co/docs/peft/",
              d: "M",
            },
            {
              name: "LangChain RAG Tutorial",
              url: "https://python.langchain.com/docs/tutorials/rag/",
              d: "M",
            },
            {
              name: "ChromaDB Getting Started",
              url: "https://docs.trychroma.com/getting-started",
              d: "E",
            },
          ],
          milestones: [
            "Document ingestion & chunking pipeline",
            "Embedding generation (sentence-transformers)",
            "Vector store indexing (ChromaDB)",
            "RAG retrieval + LLM generation pipeline",
            "Citation linking in responses",
            "LoRA fine-tuning on custom dataset",
            "Evaluation (BLEU, ROUGE, human eval)",
            "Chatbot UI with streaming responses",
          ],
        },
      ],
    },
  ],
};
