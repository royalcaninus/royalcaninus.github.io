---
layout: page
title: "Dreamteam Brainstorming Results"
description: "These are the results of the stakeholder brainstorming session that took place May 14, 2014."
extra_js:
  - //www.google.com/jsapi
  - /assets/themes/bootstrap/resources/dreamteam.js
group: navigation
---
{% include JB/setup %}

<section>
    <ul class="nav nav-tabs">
        <li class="active"><a href="#stakeholder-container" data-toggle="tab">Stakeholder</a></li>
        <li><a href="#pillar-container" data-toggle="tab">Pillar</a></li>
        <li><a href="#location-container" data-toggle="tab">Location</a></li>    
    </ul>
    <ul class="chart-container tab-content">
        <li class="tab-pane active" id="stakeholder-container">
            <ul class="nav nav-pills">
                <li class="active"><a href="#stakeholder-bubble" data-toggle="tab">Bubble</a></li>
                <li><a href="#stakeholder-raw" data-toggle="tab">Raw</a></li>
            </ul>
            <ul class="tab-content">
                <li class="tab-pane active" id="stakeholder-bubble">
                    <span class="chart" id='stakeholdernormalizedbubble'></span>
	
                </li>
                <li class="tab-pane" id="stakeholder-raw">
                    <span class="chart" id='stakeholdernormalized'></span>
                </li>
            </ul>
        </li>
        <li class="tab-pane" id="pillar-container">
            <ul class="nav nav-pills">
                <li class="active"><a href="#pillar-bubble" data-toggle="tab">Bubble</a></li>
                <li><a href="#pillar-raw" data-toggle="tab">Raw</a></li>
            </ul>
            <ul class="tab-content">
                <li class="tab-pane active" id="pillar-bubble">
                    <span class="chart" id='pillarbubble'></span>
                </li>
                <li class="tab-pane" id="pillar-raw">
                    <span class="chart" id='pillar'></span>
                </li>
            </ul>
        </li>
        <li class="tab-pane" id="location-container">
            <ul class="nav nav-pills">
                <li class="active"><a href="#location-bubble" data-toggle="tab">Bubble</a></li>
                <li><a href="#location-raw" data-toggle="tab">Raw</a></li>
            </ul>
            <ul class="tab-content">
                <li class="tab-pane active" id="location-bubble">
                    <span class="chart" id='locationbubble'></span>
                </li>
                <li class="tab-pane" id="location-raw">
                    <span class="chart" id='location'></span>
                </li>
            </ul>
        </li>
    </ul>
</section>


