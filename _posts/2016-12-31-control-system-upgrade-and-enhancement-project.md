---
layout: post
title: "Control System Replacement, Upgrade, and Enhancement Project"
date:   2016-12-31
categories: Biotechnology, DeltaV, OPC, Rockwell PLC, EBR, integration, specification, validation
---

A pharmaceutical company needed to replace and upgrade their existing, obsolete control system. The system included DeltaV Batch, Rockwell PLCs, Electronic Batch Records, OSIPI Historian, OPC bridging servers, HMIs via KVM, multiple networks, and peripheral systems. The system was running with tremendous risk for delay as most of the system was obsolete and many replacement parts were no longer available. The outdated HMI technology resulted in complicated troubleshooting and required extensive downtime for repairs. Remote sessions for PLCs did not exist. Hardware wiring was disorganized and did not follow color-coding standard. Specification documentation was incorrect or missing for all of the system hardware.

## Project Scope

The scope of the project required building the whole control system and server room from scratch. All servers, networking, cabling, and switches were re-built. New design specifications were created and validated resolving an existing compliance gap. New servers with updated operating systems and the latest software versions were installed, configured, and validated. All software configuration, continuous and batch history, and reporting databases were migrated seamlessly.

JSat performed in-depth analysis, identified more than 300 graphics that contained hidden custom scripts that would prevent proper migration, and took the necessary steps to repair the code. All interfaces were modified: DeltaV to the Electronic Batch Record system, to the PLC system via OPC, and to the site OSIPI Historian. JSat also redesigned the existing, brittle operator stations from KVM to Thin Clients, thereby reducing server room foot print from more than 60 computers to 14 terminal servers. Redundancy was also configured to the Batch and Historian Servers to ensure no data gap. An unnecessary OPC bridge was replaced with the Industry-standard OPC server configuration. A direct DeltaV to PLC interface was configured, eliminating the constant communication issues and adding capability for remote sessions for RSLogix users. Historian and data back-up processes were streamlined and automated. The automation network was completely re-wired and color coded, hardware in the server room was arranged for ergonomic access and efficient cooling, and the network and grounding were segregated to resolve noise and communication issues. 

Multiple design specifications were generated, and a decommissioning procedure was implemented. IOC and IOPQ protocols were generated and streamlined the validation activities. All system development was performed and tested remotely, thereby enabling the whole project to be executed during the shutdown period with no production impact.

![Picture](/assets/img/pictures/JSatUpgradeProject-1.jpg?w=832){:style="margin: 10px 0px; width: calc(33% - 10px);"}
![Picture](/assets/img/pictures/JSatUpgradeProject-2.jpg?w=832){:style="margin: 10px 0px; width: calc(33% - 10px);"}
![Picture](/assets/img/pictures/JSatUpgradeProject-3.jpg?w=832){:style="margin: 10px 0px; width: 33%;"}

## Challenges

-	No documentation of the existing system (inadequate specifications, no drawings, nothing to start from).
-	All hardware of existing control system needed to be removed from the server room and replaced with an enhanced system.
-	All servers, network, cabling, etc. needed to be completely rebuilt.
-	Aggressive time constraints for manufacturing system shutdown
-	62 operator interface terminals (OITs) located throughout the site required physical install of ThinClients into the panels
-	Limited Maintenance support
-	344 unique Visual Basic custom scripts within DeltaV graphics, most not supported in upgraded version of Windows Server OS

## Results

The project was successfully executed, and all milestones were achieved ahead of schedule. The client was extremely satisfied with the results. The project resulted in more than $5 million in project execution savings and production downtime elimination. Compliance and obsolescence problems were also eliminated, and server room optimization provided future expansion capability as well as saving more than $1 million in maintenance costs. This project was recognized as one of the top projects of the year and a significant operational achievement for the client site.
