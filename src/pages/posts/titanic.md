---
title: How to ACHIEVE MORE THAN 97 PERCENT ACCURACY FOR TITANIC DATASET AND DEPLOY it into production IN LESS THAN A MINUTE
subtitle: Titanic data set is one of the most common datasets for Machine learning beginners.
date: '2020-05-05'
excerpt: >-
  Titanic data set is one of the most common datasets for Machine learning beginners.
image: images/titanic_header.jpg
thumb_image: images/titanic_thumb.jpg
template: post
---

This data set is talking about the most famous boat ever been talked about.
> This boat sinked in 15 April 1912 in the North Atlantic Ocean (WIKIPEDIA).

## Dataset
This dataset consists out of 1309 rows X 14 columns.

For this set we are going to use our AUTOML. It demands no skills of code.
and any basic code developer can predict and deploy.

The titanic dataset can be found in example **Data Source Examples** tab.

![Data Source Examples](/images/titanic/dataSourceExmaples.png)
You can enter it using the following link https://platform.datomize.ai/data-source/data-set/5e958bf45df9a31f95dc5f17

You can see the Engine recommended not to use 4 columns.
cabin,body, home.dest and ticket.
If we think about that it makes sense. why?
Clicking on body will show you next
![Titanic Data Set](/images/titanic/titanicDataSet.png)
> as you can see it has 1188 missing values.
 its  ~ 90 percent of  out of all values. probably this column has nothing to contribute to this set.
name, ticket and home.dest are category columns and they have so many distinct values it denotes nothing to out target variable.

## Create Experiment
Next we will hit the screwdriver button to get to the most interesting part
“Choosing an algorithm”.

For this task i choose RANDOM FOREST algorithm.
Random forest is very popular algorithm which uses bagging trees.
It creates random trees and making decision by voting on the result of each tree.

In this step we split lineary (using toggling off the random button) the dataset to (70,30)
70 percent will be trained and 30 percent will be reserved for test.
We are choosing survived column to be predicted.
Choose random forest from the two class section.
Toggle AutoOptimize button to let the system to choose the best model hyper tuning and choose best metric Accuracy

![Create Experiment](/images/titanic/createExperiment.png)
Now you can click RUN button to start experiment

## Experiment Info
When it finish you will see the result screen

![Titanic Experiment Info](/images/titanic/experimentInfo.png)

As you can see we hit accuracy of 97 percent and f1 score of 93.8 percent.
Also we can see the most influencing columns which donates the high score.
Confusion matrix shows that we missed 10 predictions out of 328 test rows.

Also the row curve is close to be perfect :-)

## Deploy Experiment
Now we can continue to deploy model using deploy button

![Titanic Experiment Deploy](/images/titanic/experimentDeploy.png)

After deployment you can start evaluating you model using evaluate button

![Titanic Deploy Info](/images/titanic/deployInfo.png)

Enjoy :-)!!
