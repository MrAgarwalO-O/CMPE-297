# Unsloth assignment - tuning and experimenting with llms

## **Assignment Description**

This project focuses on **finetuning**, **continued pretraining**, and **reward modeling** for various open-weight LLM modules. It demonstrates how to apply **Unsloth AI** for efficient and lightweight LLM development, covering multiple tasks and use cases.

The work includes:
1. Finetuning on diverse tasks (coding, chat, classification).
2. Continued pretraining to extend model capabilities for specific tasks or languages.
3. Reward modeling with **ORPO** and **DPO**.
4. Advanced deployment of finetuned models using **Ollama** for inference.

---
# [Demo Video](https://drive.google.com/file/d/1qCJk81bQrW-laMhBCh0AMToRJt3z9pSc/view?usp=sharing)


## **Part-wise Breakdown**

### **a) Finetuning (Four Unique Use Cases)**
- **Objective**: Finetune selected LLMs for different use cases like coding, conversational tasks, and classification.
- **LLMs Used**:
   - Llama 3.1 (8B)
   - Mistral NeMo (12B)
   - Gemma 2 (9B, 2B)
   - Phi-3.5 (mini) & Phi-3 (medium)
   - TinyLlama
   - Qwen2 (7B)
- **Tools**:
   - Unsloth AI
   - Ollama for deployment
- **Steps**:
   - Choose a task per model (e.g., chat, classification).
   - Use chat model templates.
   - Explain input format, datasets, and training processes clearly.

**Hint**: Follow [Unsloth LORA with Ollama](https://sarinsuriyakoon.medium.com/unsloth-lora-with-ollama-lightweight-solution-to-full-cycle-llm-development-edadb6d9e0f0).

---

### **b) Continued Pretraining**
- **Objective**: Use Unsloth AI for continued pretraining on a new language.
- **Steps**:
   - Select a base model.
   - Train the model with new language data.
   - Validate the extended capability.

**Hint**: [Unsloth Continued Pretraining Docs](https://docs.unsloth.ai/basics/continued-pretraining).

---

### **c) Chat Templates and Context Extension**
- **Tasks**:
   - Create Colab scripts for:
     - Classification tasks.
     - Conversational chat.
     - Extending max context size of **TinyLlama**.
   - Finetune multiple datasets simultaneously.

---

### **d) Reward Modeling**
- **Objective**: Perform reward modeling with ORPO and DPO techniques.
- **Tools**:
   - Unsloth AI.
   - ORPO and DPO frameworks.

**Hint**: Refer to [Reward Modeling Docs](https://docs.unsloth.ai/basics/reward-modelling-dpo-and-orpo).

---

### **e) Continued Finetuning from Custom Checkpoints**
- **Objective**: Start finetuning from a custom model checkpoint for specific use cases.
- **Steps**:
   - Load the custom checkpoint.
   - Train further for the desired task.

---

### **f) Finetuning for Mental Health Chatbot**
- **Objective**: Develop a mental health support chatbot using **Microsoft Phi-3** and Unsloth.
- **Steps**:
   - Fine-tune the Phi-3 model.
   - Validate responses for mental health use cases.

**Hint**: [Mental Health Chatbot Tutorial](https://medium.com/@mauryaanoop3/fine-tuning-microsoft-phi3-with-unsloth-for-mental-health-chatbot-development-ddea4e0c46e7).

---

### **g) Model Deployment with Ollama**
- **Objective**: Export a finetuned model to **Ollama** and demonstrate inference.
- **Steps**:
   - Fine-tune the LLM.
   - Export to Ollama.
   - Test inference performance.

**Hint**: [Export to Ollama Docs](https://docs.unsloth.ai/tutorials/how-to-finetune-llama-3-and-export-to-ollama).

---
