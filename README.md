# The Galactic Lottery Script!



<span style="font-weight: 400;">to see the implementation of the galactic lottery script: <a href="http://www.thegalacticlottery.com/script/">http://www.thegalacticlottery.com/script/</a></span>
<div id="w" style="width: 60%; margin-left: auto; margin-right: auto; text-align: left;">

&nbsp;
<div style="font-weight: 400; width: 70%; text-align: justify; margin-left: auto; margin-right: auto;"><b>Abstract</b>: The website “The Galactic Lottery and Satoshi’s Lost Keys" offers users (regardless of religion, race, sex, or technological background) a chance to try their luck in uncovering Satoshi’s lost keys. The website is completely free, and connectable via any personal computer or smartphone. If the user's computer successfully guesses Satoshi's private key, that user becomes Satoshi himself !!!The user gains the opportunity to copy the private key that he uncovered, to restore it in any ordinary Bitcoin wallet, and to unlock the lost Bitcoins that are stored in that private key.</div>
</div>
&nbsp;
<div id="w" style="width: 60%; margin-left: auto; margin-right: auto; text-align: left;">

<span style="font-weight: 400;">On 31 October 2008, an unknown human being, known to the virtual community as the venerable Satoshi Nakamoto, published a white paper (much like this one) in a Cryptographic Mailing List. This white paper described a new project on which this admired personality was working on: Bitcoin, A Peer-to-Peer Electronic Cash System.</span>

<span style="font-weight: 400;">Unlike any financial system hitherto (or henceforth) known to humanity, the system that Satoshi created does not require any central body in order to function. It is not dependent upon a central bank, a private bank, a proprietary Ltd., a Switzerland-based company with the word “foundation” in it, a company with a BitLicense, a private person, galactic aliens, or God. Satoshi’s white paper contained strong words such as: peer-to-peer, double spend, block, hash, proof of work, CPU, merkel brunch, nodes, network, digital signatures, and more.</span>

<span style="font-weight: 400;">When the Bitcoin system first launched into the open cyberspace, Satoshi was the only one using it </span><span style="font-weight: 400;">?</span><span style="font-weight: 400;">. Satoshi performed an action called Mining, which earned him fifty new Bitcoins every ten minutes, adding to the economic circulation he himself founded. He stored these Bitcoins in different wallets with different public addresses in order to give the impression that there were many different Bitcoin users (Satoshi was something of sneaky bastard). This went on for a long period of time, and Satoshi produced more than 20,000 such Bitcoin addresses, nearly all of which still contain fifty Bitcoins. Satoshi currently holds more than a million Bitcoins in his various wallets, accounting for 6% of the total amount of Bitcoins in circulation, an estimated $15,000,000,000 (as of the 2018th year of our Lord, the late Jesus).</span>

<span style="font-weight: 400;">The mysterious personality named Satoshi Nakamoto is most likely no longer with us/ has lost all his private keys to his Bitcoin accounts and committed suicide/ is afraid to use the Bitcoins and thus to expose his secret identity.</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;"> The Galactic Lottery Team saw fit to create a platform that makes it possible for people with no background in statistics whatsoever to try and uncover Satoshi's private keys, and to participate in the most brutal Brute Force in the history of mankind. This idea first came from the following mathematical equation:</span>
<div style="text-align: center; font-size: 24px;"><span style="font-weight: 400;">D</span><span style="font-weight: 400; font-size: 12px;">2</span><span style="font-weight: 400;">+U</span><span style="font-weight: 400; font-size: 12px;">2</span><span style="font-weight: 400;">+M</span><span style="font-weight: 400; font-size: 12px;">2</span><span style="font-weight: 400;">+B</span><span style="font-weight: 400; font-size: 12px;">2</span><span style="font-weight: 400;"> = G</span><span style="font-weight: 400; font-size: 12px;">2</span></div>
&nbsp;
<div style="text-align: center; font-size: 13px;"><span style="font-weight: 400;">D = Basic lack of understanding in statistics,U =  unexploited resources of private computers,M =  desire to get rich and get there fast, B =  luck, G =  Genius.</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">(The power 2* is intended to illustrate that this is a </span><i><span style="font-weight: 400;">bona fide</span></i><span style="font-weight: 400;">  mathematical equation.)</span></div>
&nbsp;

<b>How does the Galactic Lottery actually work?</b>

<span style="font-weight: 400;">
</span><span style="font-weight: 400;">We created a database using a very simple script. Looking at Bitcoin’s transaction history, we copied  all the public keys that were loaded with fifty Bitcoins, which were mined directly from blocks #1 (Genesis Block) thru  </span><span style="font-weight: 400;">#25,000. The absolute vast majority of these keys belong to the so-called Satoshi Nakamoto, and contain fifty Bitcoins to this day. The following key is an example:</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">
</span>
<div style="font-weight: 400; text-align: center;"><b>1HLoD9E4SDFFPDiYfNYnkBLQ85Y51J3Zb</b></div>
<span style="font-weight: 400;">
</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">F</span><span style="font-weight: 400;">or convenience, we converted all the public addresses to a Hexadecimal format (base 16) and dropped the "00" prefix that characterizes all public valid keys on the Bitcoin network (this prefix causes all public addresses in WIF format to begin with the numb</span><span style="font-weight: 400;">er “1”). Here is how it looks like:</span><span style="font-weight: 400;">
</span><span style="font-weight: 400;">
</span>
<div style="font-weight: 400; text-align: center;">

<b>b3407d4b4d1fca87fb930abe3fa6c2baed6e6fd8</b>
<div style="font-weight: 400; text-align: left;"><b>The main script is quite simple:</b></div>
&nbsp;
<ul style="text-align: left;">
 	<li style="font-weight: 400;"><span style="font-weight: 400;">The browser generates a pseudo-random number from 0 to n / 100.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Converts the decimal number to a hexadecimal format.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Generates a public key according to the elliptic curve secp265k1.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Enters the full p</span><span style="font-weight: 400;">ublic key of the two coordinates (x, y) into a one-way function called sha256.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Enters the result into another one-way function called ripemd160.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">Determines whether the result matches one of the keys in the database. If it is a match, the script stops running, and prints the winning private key to the user. You now have access to a Satoshi private key!</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">If the public key does not exist in the database, the script adds (+1) to the number last tested, and repeats the process. This process is repeated 100 times.</span></li>
 	<li style="font-weight: 400;"><span style="font-weight: 400;">If no match is made within the created range of 100 private keys, the entire script is repeated with a new pseudo-random number.</span></li>
</ul>
&nbsp;
<div style="font-weight: 400; text-align: left;">

The reason we only target Satoshi's keys, and not all Bitcoin keys, is efficiency. We have no desire to run a huge database on a server that would cost a lot of money and would require unnecessary communication between the user and the server. By having the user's browser download a small database containing the Satoshi keys alone, the user can produce and test a much greater amount of private addresses per second than he would if he were using a huge database or a communication-requiring server that contains a huge database.

Because the user's chances of actually finding one of Satoshi’s private keys are possible but insignificant, we decided not to write a code that would steal the private key from that lucky us<span style="font-weight: 400;">er. Not only that, but because we are nice and because we don’t really care, we allow users to go on the website on their browsers, disconnect from the Internet, and search for the keys locally.</span>

<b>What’s in it for us?</b>  The most valuable thing in the world: Fame and Glory! We advocate contributing to the Bitcoin ecosystem, and doing so with a tint of humor. We will be placing <span style="text-decoration: line-through;">advertisements on the website</span> in order to finance our server and domain expenses. For this same reaso<span style="font-weight: 400;">n, a Bitcoin address for contributions will also be posted. We should also mention that we have very low standards, and that we will be willing to sell the platform to the highest bidder (in Bitcoin), and even to sell-out for a financial gain.</span>

&nbsp;

<span style="font-weight: 400;">Yours Truly,</span>

<span style="font-weight: 400;">The GoingCrypto Crew </span>


<span style="font-weight: 400;"><b> BE A GALACTIC FRIEND AND DONATE SOME BITCOIN: <a href="bitcoin:12sdX7hw9ZiquKPtzdPDsYuBiSs42t4ov8">12sdX7hw9ZiquKPtzdPDsYuBiSs42t4ov8</a> </b></span>

</div>
</div>
</div>