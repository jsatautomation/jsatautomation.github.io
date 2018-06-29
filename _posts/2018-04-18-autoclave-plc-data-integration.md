---
layout: post
title: "Autoclave PLC Data Integration"
date:   2018-04-18
categories: Biotechnology, Rockwell PLC, Wonderware Historian, Wonderware ArchestrA, OSIsoft OSIPI Historian, OSIsoft RtReports, OPC DAServer
---
A leading pharmaceutical company’s vaccine production site had two autoclave systems not connected to any automation network. Each autoclave system had two HMIs, an inkjet printer, and two chart recorders. Acceptance reports on the completed autoclave cycles required a printout from the printer, strip charts from the chart recorders, and transcription from the HMI by the operator. If the printer was out of paper or ink, a strip chart was damaged, the operator made an entry error, or some other failure occurred during generation of the report, the corresponding data were lost and operators had to rerun the entire autoclave cycle. This situation was not only wasting production time and resources, but also creating a significant compliance risk. [FDA expects that data be reliable and accurate](https://www.fda.gov/downloads/drugs/guidances/ucm495891.pdf), so the autoclave cycle data needed to be stored and analyzed more robustly than the current state.

![Picture](/assets/img/pictures/JSatAutoclaveIntegration-1.png?w=832){:style="margin: 10px 0px"}

## Project Scope

JSat Automation worked with the customer to determine the best solution given their existing systems and need for minimal downtime. We designed a simple, robust architecture that minimized cost and validation required. Starting at the device level, the five probe readings previously sent to chart recorders were integrated into each autoclave’s PLC program. The autoclave PLC programs also required modification to remove printer interactions and properly capture a leak-rate value for the acceptance report of certain cycles. We then integrated the stand-alone autoclave PLCs and HMIs to the existing automation device network.

JSat configured a new virtual machine on the customer’s existing virtual infrastructure as a data-access server (DAServer) from the autoclave PLCs to the existing local Wonderware Historian. Process-critical parameters were identified within the autoclaves’ unique PLC programs and tagged in the DAServer. These data points were all historized via the DAServer to the Wonderware Historian, which was already configured via a PI interface to historize to the corporate OSIPI Historian. The client’s Information Services team configured new, thorough acceptance reports generated for each type of autoclave cycle using OSIsoft RtReports application.

![Picture](/assets/img/pictures/JSatAutoclaveIntegration-2.png?w=832){:style="margin: 10px 0px"}

## Challenges

The client’s Validation team expected exhaustive testing of each tag, whereas JSat asserted validation requirements could be met via testing sample tags of each type (analog, discrete, and string) because they were imported the same way on the same system without modification of the PLC program’s collection of that data. Ultimately, a compromise was reached. Sample tags were tested for connectivity and accuracy starting at the PLC program and tracing up to the Wonderware Historian. All other tags were tested for DAServer connection from the PLC to the Wonderware Historian.

## Results

All PLC, DAServer, and Wonderware Historian configuration and test protocol development was performed at the JSat office, eliminating impact on the customer’s running production systems until installation at the client site. Installation and validation testing were completed in three days for each autoclave.

As part of the project, JSat revised multiple autoclave and network specification documents and drawings. JSat also wrote multiple validation test protocols approved and executed by the client’s Validation team.

This project was successfully completed on schedule. JSat’s careful design – from initial scope to validation – provided the client with streamlined, robust integration and no unnecessary production downtime.

Client feedback: “The successfulness of the autoclave project and the support you provided … along with all the other projects/issues you helped with over the years has proven (to at least me) that you and your company are well skilled with the drive to make our plant run reliably.”
