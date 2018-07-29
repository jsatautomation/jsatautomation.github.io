---
layout: post
title: "Control System Replacement, Upgrade, and Enhancement Project"
date:   2016-12-31
categories: Pharmaceutical, Emerson DeltaV, OPC, Rockwell PLC, EBR, OSIPI Historian, KVM, ThinClient, virtualization, networking, integration, specification, validation, upgrade
---


A pharmaceutical company needed to replace and upgrade their existing, obsolete control system. The system included DeltaV Batch, Rockwell PLCs, Electronic Batch Records, OSIPI Historian, OPC bridging servers, HMIs, multiple networks, and peripheral systems. The system was running with tremendous risk for delay as most of the system was obsolete and many replacement parts were no longer available. No servers had redundancy, including process-critical applications. The outdated HMI technology required frequent, complicated troubleshooting and extensive downtime for repairs. Remote sessions for PLCs did not exist. Hardware wiring was disorganized and did not follow color-coding standard. Specification documentation was incorrect or missing for all of the system hardware and architecture.

## Project Scope

The scope of the project required building the whole control system and server room from scratch. All servers, networking, cabling, and switches were re-built. The automation network was completely re-wired and color coded. Hardware in the server room was arranged for ergonomic access and efficient cooling. The network and grounding were segregated to resolve noise and communication issues. New servers with updated operating systems and the latest software versions were installed, configured, and validated. Redundancy was configured on the DeltaV Batch and Historian servers to ensure running batches could not fail and process data could not be lost. JSat also redesigned the existing, brittle operator stations from KVM to Thin Clients, thereby reducing HMI footprint in the server room from 62 computers to 14 terminal servers. The use of ThinClient technology also enabled remote troubleshooting of the DeltaV HMIs and additional sessions for EBR system users. Three stand-alone InfoLog clients were moved to DeltaV terminal servers, quadrupling the number of simultaneous user sessions while reducing hardware footprint.

All interfaces were modified: DeltaV to the Electronic Batch Record system, DeltaV to PLC via OPC, DeltaV to PLC via VIM, DeltaV to site PI, and barcode scanners to DeltaV. The InfoLog database was consolidated and moved from the existing InfoLog server to the DeltaV Batch Historian, solving database connection issues when generating EBR reports. An unnecessary OPC bridge was replaced with the Industry-standard OPC server configuration. A direct DeltaV to PLC interface was configured, eliminating the constant communication issues and adding capability for remote sessions for RSLogix users. A new VMware virtual infrastructure was designed and built for the client to host several of the interface servers and allow for future expansion of the virtual system.

All existing software configuration was migrated to the new versions. JSat performed in-depth analysis to identify 344 graphics that contained hidden custom scripts that would prevent proper migration and took the necessary steps to repair the code. Continuous, batch, audit trail, and reporting history databases were migrated seamlessly. Historian and data back-up processes were streamlined and automated. 

JSat managed and lead all documentation activities for the project. Three new design specifications were generated and validated, resolving an existing compliance gap. Six decommissioning standard operating procedures (SOPs) were created for the client. Five drawings were created for the client, including network architecture and server room physical layout. Six IOC protocols, six IOPQ protocols, and 12 summary reports were generated per JSat's streamlined validation design. All system development was performed and tested remotely, thereby enabling the entire project to be implemented during the shutdown period with no production impact.

<a href="/assets/img/pictures/JSatUpgradeProject-1.jpg">![Picture](/assets/img/pictures/JSatUpgradeProject-1.jpg?w=832){:style="margin: 10px 0px; width: calc(33% - 10px);"}</a>
<a href="/assets/img/pictures/JSatUpgradeProject-2.jpg">![Picture](/assets/img/pictures/JSatUpgradeProject-2.jpg?w=832){:style="margin: 10px 0px; width: calc(33% - 10px);"}</a>
<a href="/assets/img/pictures/JSatUpgradeProject-3.jpg">![Picture](/assets/img/pictures/JSatUpgradeProject-3.jpg?w=832){:style="margin: 10px 0px; width: 33%;"}</a>

## Challenges

- No documentation of the existing system (inadequate specifications, no drawings, nothing to start from).
- All hardware of existing control system needed to be removed from the server room and replaced with an enhanced system.
- All servers, network, cabling, etc. needed to be completely rebuilt.
- Aggressive time constraints for manufacturing system shutdown
- 62 operator interface terminals (OITs) located throughout the site required physical install of ThinClients into the panels
- Limited Maintenance support
- 344 unique Visual Basic custom scripts within DeltaV graphics, most not supported in upgraded version of Windows Server OS

## Results

The project was successfully executed, and all milestones were achieved ahead of schedule. The client was extremely satisfied with the results. The project resulted in more than $5 million in project execution savings and production downtime elimination. Compliance and obsolescence problems were also eliminated, and server room optimization provided future expansion capability as well as saving more than $1 million in maintenance costs. This project was recognized as one of the top projects of the year and a significant operational achievement for the client site.

