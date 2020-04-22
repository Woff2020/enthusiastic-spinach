---
title: How It Works
sections:
- type: section_features
  template: section_features
  title: How It Works
  section_id: features
  background: gray
  features:
  - title: Loading datasets into the Datomize platform
    content: Datasets are loaded directly into the Datomize platform or streamed from any data streaming platform such as S3, Azure using Datomize connectors. The data is automatically inserted and cleansed. It is now stored in the platform’s Data Engine, totally independent from the originating cloud provider. The dataset ready to be analyzed and used.
    image: images/home/dataSourceExamples.jpg
  - title: Data analysis and training a winner
    content: The Datomize platform Algorithmic Engine automatically scans the loaded data using the smart feature selection and locks on the main parameters, their influence and how they correlate to the desired output prediction. Small batches of the loaded data are used to train several Machine Learning Algorithms picking the one with the best results - all done automatically, in real-time and under a few minutes
    image: images/home/experimentInfo.jpg
  - title: Deploying and embedding
    content: The resulting model is deployed immediately by the Algorithmic Engine on cloud. Real-time predictions are available when data is presented. The predictions can be viewed in the platform UI or accessed via API which is embedded as part of any external solution.
    image: images/home/monitor.jpg
  - title: Constantly learning and adapting
    content: The model, selected by the Datomize platform can keep training, adapting to changes and drifts in the incoming data, all in real-time. Hyperparameters can be changed by the Algorithmic Engine to ensure high prediction rates or a switch to another algorithm which better fits the new data.
    image: images/home/experiments.jpg
  - title: Always Transparent
    content: Everything is transparent in the Datomize platform. A comprehensive dashboard shows all the information on the success of the different algorithms, the parameters, the ongoing training status and even the ability to drill down into the model to understand and explain how the predictions are made. The dashboard even allows for sandbox experiments, testing offline to validate and check predictions before going online.
    image: images/home/explain.jpg
template: landing
---