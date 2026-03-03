from PyPDF2 import PdfReader
import os
import json

pdf_folder = r"c:\Users\Mary Martha\OneDrive\Documents\OneDrive\Desktop\conversationHub\public\images"
pdf_files = [f for f in os.listdir(pdf_folder) if f.endswith('.pdf') and f != 'website.pdf']

cards_data = {}

for pdf_file in sorted(pdf_files):
    pdf_path = os.path.join(pdf_folder, pdf_file)
    try:
        reader = PdfReader(pdf_path)
        card_name = pdf_file.replace('.pdf', '')
        full_text = ""
        
        for page in reader.pages:
            text = page.extract_text()
            if text:
                full_text += text + "\n"
        
        cards_data[card_name] = full_text.strip()
        print(f"\n{'='*80}")
        print(f"CARD: {card_name}")
        print(f"{'='*80}")
        print(full_text[:1000])
        if len(full_text) > 1000:
            print(f"\n[... Content continues - Total length: {len(full_text)} characters ...]")
    
    except Exception as e:
        print(f"\nERROR with {pdf_file}: {str(e)}")
        cards_data[pdf_file] = f"Error: {str(e)}"

# Save to JSON file for reference
with open('cards_extracted.json', 'w', encoding='utf-8') as f:
    json.dump(cards_data, f, ensure_ascii=False, indent=2)
print("\n\nExtracted data saved to cards_extracted.json")
