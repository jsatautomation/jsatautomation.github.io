---
layout: post
title: "Control System Replacement, Upgrade and Enhancement Project"
date:   2018-05-22
categories: controls deltav rockwell plc
---
The *Control Systems Replacement, Upgrade & Enhancements Project* was successfully executed and all milestones were achieved ahead of schedule. This was a big undertaking as existing control system was completely removed from the server room and replaced with an enhanced system. *This task was no less that building the whole control system and server room from scratch. All servers, network, cabling, etc. was completely re-built.* New design specification documents were generated and *validated* – thus filling a major compliance gap!

Control system (both Production and Simulation) consisted of the following different systems:

```
>> DeltaV
>> Rockwell PLC Systems (COPs, Rollerthaw & Bagthaw)
>> EBR
>> Network & Peripherals systems
>> OSI PI
```

![Picture](https://i1.wp.com/jsatautomation.com/wp-content/uploads/2017/04/WP_20160914_11_09_52_Pro2.jpg?w=832){:style="margin: 10px 0px"}
![Picture](https://i2.wp.com/jsatautomation.com/wp-content/uploads/2017/04/WhatsApp-Image-2016-11-30-at-10.38.04-AM.jpeg?w=747){:style="margin: 10px 0px"}
![Picture](https://i0.wp.com/jsatautomation.com/wp-content/uploads/2017/04/WP_20160915_18_10_20_Pro-1.jpg?zoom=2&resize=576%2C1024){:style="margin: 10px 0px"}

For all the above systems:

* New Server Hardware, Operating systems and newer automation software were installed, configured and validated
* All existing automation applications were migrated to newer installed versions and validated
* All existing continuous history, batch history, audit trails history, reporting databases history, etc. were migrated and validated.
* DeltaV graphics (Total 344) contain a huge number of custom scripting which needed particular attention and fixing during this process.
* All Interfaces were modified to apply enhancements. Interfaces include DeltaV to EBR, DeltaV to PLC (OPC), DeltaV to PLC (VIM),  DeltaV to site PI, Barcode scanners etc.)
* New Design specification documents for all systems were created representing.
* VMware infrastructure was designed and built to host DeltaV systems, OSIsoft PI interfaces and for future expansion.

Following *enhancements* were achieved:

DeltaV System:

* Removed existing KVM system and installed “Thin Clients” for DeltaV & EBR Operator Stations. Following benefits were achieved with this enhancement:
  * KVM is an old technology and difficult to troubleshoot, and it was specifically causing OIT issues. With Thin Client technology OIT specific issues are drastically reduced. Thin Manager software enables remote troubleshooting of the OITs as well.
  * Reduced 62 OIT machines to just 14 Terminal servers thus reducing the hardware footprint in the server room
  * Less number of servers to maintain, troubleshoot, less power consumption.
* Added Batch Executive Server Software redundancy. This enhancement can save all running batches in the event the batch server fails.
* Removed old OPC Bridge machines and software configurations and configured industry standard OPC server software and configurations.
* Added PLC and OPC Configurations to SIM system to match with PROD
* Cleaned up various old custom scripts contained in the graphics.

Rockwell PLC Systems:

* DeltaV-PLC OPC interface was redesigned and configured which resulted into solving communication issues.
* Added Remote sessions for RSLogix users.

EBR Systems:

* Consolidated and moved the InfoLog database from InfoLog server to Batch Historian. This resulted into solving database connection issues while generating EBR reports.
* InfoLog Clients installation was moved to DeltaV Terminal Servers. This resulted into eliminating three (3) servers.
* InfoLog was made part of DeltaV graphics as opposed to stand-alone dedicated stations. Accessing InfoLog from DeltaV graphics provided flexibility for InfoLog users. Also the number was simultaneous users were increased from 3 to 12.

Network & Peripherals:

* All cables were made to color code that now match with network diagrams. Server and Switches hardware were arranged in more ergonomically manner and efficient for cooling.
* All new cables have been tagged/labeled per industry standard. This will tremendously help troubleshooting network issues.
* Metal grounding ends for all cables were used which resulted into less interference.
* Clear segregation among all five (5) different networks which resulted into solving existing network related issues.
* Critical Data Back-up and restore process streamlined.

Design Specification & Testing Documentation:

Finally, as part of this project

* Three (3) new design specifications,
* Six(6) decommissioning plans,
* Six(6) IOC protocols,
* Six(6) IOPQ protocols,
* Twelve (12) summary reports were created and executed  and
* Fourteen (14) existing documents and SOPs were redlined.
