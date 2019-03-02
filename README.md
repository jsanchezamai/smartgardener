[SmartGardener](https://github.com/jsanchezamai/smartgardener/wiki) is a software to create, setup and run Ciber Green Voltaics plant walls. 

Overview
============
Developing time has been divided in 4 big [milestones](https://github.com/jsanchezamai/smartgardener/milestones):

- Application context, [Playground](https://github.com/jsanchezamai/smartgardener/wiki/Playground).
- Wall definition, [Holon](https://github.com/jsanchezamai/smartgardener/wiki/Holon).
- Lifetime experience, [Informon](https://github.com/jsanchezamai/smartgardener/wiki/Informon).
- Release.

Road map 
============

[Playground](https://github.com/jsanchezamai/smartgardener/wiki/Playground)
-----------------------

User should be able to:

- Open the SmartGardener v 0.1.
- Locate **menu / new / Create a wall**. Define a wall by geolocation, define dimensions, pick plant kind, pick soil. 
- Launch it. An **empty environment** is created.
- Agents start to report brain requests. **Weather forecasting and climatic regions** agents connect and sync with big data sources. **Circadian and seasonal timers** agents are triggered on a dual runtime line.

This milestone should release:

- Release [SmartGardener Landing Page](https://github.com/fablabbcn/smartcitizen-landing).
- Release [SmartGardener Node-Red Wizard](https://github.com/jsanchezamai/smartgardener/tree/playground/src/playground).

[SmartGardener-holon](https://github.com/jsanchezamai/smartgardener/wiki/holon-SmartGardener)
 ------------------------

At previous sesion on SmartGardener v 0.1, user shoud be able to:

- Locate inside playground desk the **"Launch holon" button**. Launch it. Defined wall should be presented.
- Brains are started from [**per plant type models**](https://github.com/fablabbcn/smartcitizen-iscape-models), those are instanciated at plot holders.
- Agents starting at wall runtime. 

This milestone should release:

- Monitor the onboarding cycle. Calibration process. Release [SmartGardener OnBoard Wizard](https://github.com/fablabbcn/smartcitizen-onboarding-app-start).
- Stabilize plots and monitor lifetime. Release [SmartGardener Plot Dashboard](https://github.com/fablabbcn/smartcitizen-react-dashboard)
- Stabilize wall and monitor lifetime. Release [SmartGardener Wall Dashboard](https://github.com/fablabbcn/smartcitizen-now-dashboard).

[SmartGardener-informon](https://github.com/jsanchezamai/smartgardener/wiki/informon-SmartGardener)
-------------------

User should be able to:

- Locate in holon desk the **"Launch informon" button**. Launch it. Existing environment and wall are presented into ia and augmented reality scenario.
- **Environment conditions** are linked with **real wall readings** and **theoretical models**. Brains coordinate agents actions.

This milestone should release:
- Monitor the onboarding cycle. Calibration process. Release [SmartGardener Kit HyperPlatform](https://github.com/fablabbcn/smartcitizen-web).
- Stabilize wall brain [docs](https://github.com/fablabbcn/smartcitizen-iscape-docs/tree/master/docs/Sensor%20Analysis%20Framework) and monitor lifetime.  Release [SmartGardener Brain Framework](https://github.com/fablabbcn/smartcitizen-iscape-data). Release [SmartGardener ONNX Agent Builder](https://github.com/Microsoft/onnxjs).

Get and run
==============
- Download current release. See dates at [Deploy SmartGardener v 0.1](https://github.com/jsanchezamai/smartgardener/milestone/4).
