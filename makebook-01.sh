#!/bin/sh
#HTML version
pandoc -s --toc --highlight-style pygments -c style.css -N -o article-es6-01.html \
	article-es6-01.md

#PDF version
pandoc -s --toc --latex-engine=xelatex --template=latex.template.tex -N \
	--variable=version:"a000 | Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License." \
	--variable=monofont:Consolas \
	--variable=mainfont:Georgia \
	--variable fontsize=12pt \
	--variable=sansfont:Georgia \
	--variable=paper:a4paper \
	--variable=hmargin:2cm \
	--variable=vmargin:2cm \
	--variable=geometry:portrait \
	--variable=nohyphenation:true \
	--variable=author-meta:"Philippe Charrière" \
	--variable=title-meta$:"ECMAScript 6" \
	-o article-es6-01.pdf \
	article-es6-01.md

pandoc -s --toc --highlight-style pygments -c style.css -N -o article-es6-01.docx \
        article-es6-01.md
