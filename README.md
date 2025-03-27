# Bitcoin Bros

# Projektbeskrivning

Det här projektet är en React-applikation byggd med Vite. Det använder Tailwind CSS och Bootstrap för styling samt Redux för state management.
Applikationen har en modern design och responsivt gränssnitt, och hanterar global state effektivt med Redux.

# Teknikval

React – Frontend-bibliotek för att bygga UI-komponenter

Vite – Snabb utvecklingsmiljö för React

Tailwind CSS – Utility-first CSS-ramverk för styling

Bootstrap – Komponentbaserat CSS-ramverk för ytterligare styling

Redux – Hantering av global state

📌 Installation och körning
Följ dessa steg för att installera och köra applikationen lokalt:

1️⃣ Klona repo från GitHub
sh
Kopiera
Redigera
git clone <repo-url>
cd nuggetdashboard
2️⃣ Installera beroenden
sh
Kopiera
Redigera
npm install
3️⃣ Starta JSON-server (för mockad backend)
sh
Kopiera
Redigera
json-server --watch db.json
4️⃣ Starta utvecklingsservern
sh
Kopiera
Redigera
cd nuggetdashboard
npm run dev
🚀 Applikationen körs nu på: http://localhost:5173/


✨ Funktioner
Responsivt design – Byggt med Tailwind CSS & Bootstrap för en snygg och flexibel layout.

State management – Redux används för hantering av globalt tillstånd.

Snabb utveckling – Vite säkerställer en snabb och effektiv utvecklingsupplevelse.

Modulär & komponentbaserad – Enkel att underhålla och vidareutveckla.

Sparkalkylator – Stöd för både Bitcoin och indexfonder.

Async Thunk – Hämtar data från en lokal db.json för att visa objekt som kan köpas vid olika sparmål.

Optimerad state-hantering – Både beräkningar och resultat sparas i global state för att undvika onödiga beräkningar på flera ställen.


# Licens

Detta projekt är under MIT-licensen. Du kan använda, modifiera och distribuera det fritt.

# Planeringslänkar

https://docs.google.com/document/d/1H4eDuZfrzw68r0HXZTlOL5OC27io28WSMaKc7NazzCg/edit?tab=t.0#heading=h.jlszf379mo0x
