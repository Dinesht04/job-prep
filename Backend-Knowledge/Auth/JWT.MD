# JWT -  JSON WEB TOKEN

1) Header

    {
        Algorithm used: SHA256,RSA 
        Token type => JWT
    }

    This json is base64url encoded

2) Payload

    {
        Claims
    }

    if you wanna put sensitive information in claims, encrypt them first.

3) Signature
    {
        HMACSHA256(algo defined in header)(
            base64urlencoded()+ "."
            base64urlencoded(),
            secretKey
        )
    } Signature is also base64url encoded   

 OUTPUT => 3 base64url string joined by a dot (.);

Encoding -> transforming into a format which's schema is publicly avaiable, used to format data for convinience, base64 url
Encryption -> process which transforms data into unreasable cypher text and can be decoded back with the use of secret key
Hashing -> One way transformation of data -> It cant be reversed and data cannot be recovered.

Why json
-> Every language has a json parser
-> It can ccarry data
-> very accessible, very web freidnly because it's a string and acts as a security meaasure.
-> provides authentication and authorization without db lookup

Validation vs Verification
Validation invloves -> 
    structure =  3 parts, header payload and signature separated by dots.
    format = base64url encoded and claims validate the defined claims
    Content - expiry, issuedat, not before are checked 

Verification
   Signature Verification
   Issuer Check
   Audience Check -> Refers to which services is the jwt expected for 

While Checking/Decoding
    Decode the header and payload from the encoded based64 url strings and then sign them again
    with the same algo and private key. If the signature in the jwt is same as the output of the
    algorithm, then verfied, gg.

Private - Public??
So private public architecture is for MicroServices, or any system design where some module other than the main auth module is decoupled from the other services, so that 
1) 1 secret doesnt have to be stored in multiple places, if it gets leaked from one all of them are comprimised.
2) Because if we use Hmac sha256 in this context, every request has to go through the auth server and then it becomes a choke point, a single point of failure.

But RS256 cant un-sign a token untill it's expired.

These flaws dont happen in a system design where the auth logic/module is defined in the webserver itself along wih all the other
services and hosted on the same server/application / they are coupled.