A wizard to...
===================
This showcase illustrates a wizard to setup CGV walls.

![](sg-nr-map.png)

Components
=================
A set of categories and nodes to configure ad hoc walls.

![smartgardener_node-red.png](smartgardener_node-red.png)
![smartgardener_node-red1.png](smartgardener_node-red1.png)

General idea
================
A wizard to create a wall. Then, monitoring. Then, interaction.

![](sg-nd-base.json)

Engine
============
The following order: 

'''
Create a wall, "5x5" sized, that will be located
at region: "Europe South" for "Basil".
'''
... goes into an "engine", and it does all the needed stuff to
create the wall.

![](sg-nd-engine.png)

Region
==============
Further discussing with the biologist points toward the observation of the weather where the wall is located.

Everything could be better understood and predicted under methereological regions umbrella.

![](sg-nd--region.png)

Steam
=========
Please, refer to documentation: Analisis Steam App. It covers Leafs kits integration.

![](sg-nd--steam-env.png)


Leafs
========
Please, refer to documentation: Analisis Leafs Kit. It covers SmartCitizen sensoring solution over IAAC printed plot.
![](sg-nd--leafs.png)
![](sg-nd-leaf-2.png)

Wizard App User Interface
======================
(Pending) See draw with requirements.

![](sg-nr-ui-app-code.png)
![](sg-nr-ui-app.png)

AddOns "The gardering agents library"
=================
CGV Cloud and CGV Brain components are documented at the analisis. Refer, please.

Brains are instaciated from onnx models. (Refer to informon section at wiki)

Customized agents drop interferences and listen to predictions from and back the CGV Steam.

![](sg-nd-_brain.png)
![](sg-nr-plugins-plant-health.png)
![](sg-nr-circadian.png)
