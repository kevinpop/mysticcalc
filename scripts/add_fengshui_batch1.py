#!/usr/bin/env python3
"""Add 5 new feng shui pages (batch 1)."""
import json, os

DATA_FILE = os.path.join(os.path.dirname(__file__), '..', 'src', 'data', 'feng-shui.json')

with open(DATA_FILE) as f:
    data = json.load(f)

existing = set(data.keys())

new_entries = {
    "kitchen": {
        "slug": "kitchen",
        "title": "Feng Shui Kitchen — Layout, Colors & Tips for Good Energy",
        "metaDescription": "Learn how to apply feng shui in your kitchen. Tips for stove placement, colors, organization, and creating a space that nourishes health and abundance.",
        "h1": "Feng Shui Kitchen — Layout, Colors & Tips",
        "content": "In feng shui, the kitchen represents your wealth and nourishment. It is where food is prepared, and food is a direct form of energy that fuels your body and life. The stove is the most important element — it symbolizes your ability to generate wealth and transform raw ingredients into nourishing meals. A clean, well-organized kitchen invites positive chi and supports financial prosperity. The ideal kitchen layout keeps the stove away from the sink (fire and water clash) and avoids placing it directly under a window (energy escapes). Warm earth tones like terracotta, soft yellow, and warm white create a welcoming atmosphere. Keep counters clear, fix leaky faucets promptly, and never leave the stove dirty — a neglected stove symbolizes neglected finances.",
        "tips": [
            "Keep the stove clean and in working order. All burners should be used regularly to activate wealth energy.",
            "Avoid placing the stove directly next to or opposite the sink. If unavoidable, place a wood element (cutting board, plant) between them to mediate fire and water.",
            "Use warm, appetizing colors like terracotta, soft yellow, sage green, or warm white. Avoid cold blues and grays.",
            "Keep counters clutter-free. Clutter in the kitchen blocks the flow of nourishing chi.",
            "Fix any leaking faucets immediately. Running water represents wealth draining away.",
            "Add a bowl of fresh fruit on the counter to symbolize abundance and good health.",
            "Ensure good lighting. A dark kitchen feels stagnant and discourages cooking."
        ],
        "colors": [
            {"name": "Terracotta", "hex": "#C4693D", "meaning": "Earth element — nourishment, warmth, stability"},
            {"name": "Soft Yellow", "hex": "#F5E6CC", "meaning": "Fire element — warmth, joy, appetite stimulation"},
            {"name": "Sage Green", "hex": "#9CAF88", "meaning": "Wood element — growth, health, renewal"},
            {"name": "Warm White", "hex": "#FAF3E0", "meaning": "Metal element — clarity, cleanliness, precision"}
        ],
        "faq": [
            {"question": "What is the best feng shui color for a kitchen?", "answer": "Warm earth tones like terracotta, soft yellow, and warm white are ideal. They create a nurturing atmosphere that supports health and appetite."},
            {"question": "Where should the stove be placed in feng shui?", "answer": "The stove should be in the commanding position — where you can see the kitchen entrance while cooking. Avoid placing it directly under a window or next to the sink."},
            {"question": "Is a kitchen facing the front door bad feng shui?", "answer": "Yes, it can be. When the kitchen is the first thing visible upon entering, chi rushes straight to food and eating, which can lead to overeating and financial instability. Use a curtain, screen, or plants to redirect the flow."},
            {"question": "What does a dirty stove mean in feng shui?", "answer": "A dirty or broken stove symbolizes neglected finances and blocked wealth energy. Keep all burners clean and in working order."},
            {"question": "Should the kitchen have plants?", "answer": "Yes, small herb plants like basil or rosemary are excellent. They bring wood energy and life force into the kitchen while being practical for cooking."}
        ],
        "relatedPages": ["bedroom", "tips", "front-door"]
    },
    "front-door": {
        "slug": "front-door",
        "title": "Feng Shui Front Door — Colors, Direction & Layout Guide",
        "metaDescription": "Your front door is the mouth of chi in feng shui. Learn the best colors, directions, and layout tips to invite positive energy into your home.",
        "h1": "Feng Shui Front Door — Colors, Direction & Layout",
        "content": "The front door is the single most important feature in feng shui. Known as the mouth of chi, it is where all energy enters your home. The direction your door faces, its color, condition, and what lies beyond it all determine the quality of energy that flows through your entire living space. A well-maintained front door with a clear, unobstructed path invites opportunity, health, and prosperity. The best feng shui front door color depends on the direction it faces: red or orange for south-facing, blue or black for north-facing, green or brown for east-facing, and white or metallic tones for west-facing. Regardless of direction, your front door should open inward (welcoming chi), be well-lit, free of squeaks, and have no clutter blocking the entrance.",
        "tips": [
            "Ensure your front door opens inward to welcome chi into your home, not push it away.",
            "Keep the area around your front door clean and well-lit. Add a welcome mat and healthy plants on either side.",
            "Fix any squeaky hinges, peeling paint, or broken locks immediately. A neglected door blocks opportunity.",
            "Choose a door color based on the compass direction it faces for maximum feng shui benefit.",
            "Avoid placing a mirror directly opposite the front door — it reflects chi right back out.",
            "If your front door faces a staircase, place a plant or screen at the base to slow rushing chi.",
            "Add a small water feature near the entrance to activate wealth energy flowing through the mouth of chi."
        ],
        "colors": [
            {"name": "Red", "hex": "#C0392B", "meaning": "Fire element — for south-facing doors. Brings fame, recognition, and passion."},
            {"name": "Navy Blue", "hex": "#2C3E50", "meaning": "Water element — for north-facing doors. Supports career and life path."},
            {"name": "Forest Green", "hex": "#228B22", "meaning": "Wood element — for east-facing doors. Promotes health, family, and growth."},
            {"name": "White", "hex": "#F8F8F8", "meaning": "Metal element — for west-facing doors. Enhances creativity and children luck."},
            {"name": "Black", "hex": "#1A1A1A", "meaning": "Water element — alternative for north-facing doors. Deep wisdom and career flow."}
        ],
        "faq": [
            {"question": "What color should my front door be for feng shui?", "answer": "The best color depends on the direction your door faces. South-facing: red or orange. North-facing: blue or black. East-facing: green or brown. West-facing: white or metallic."},
            {"question": "Which direction should a front door face for good feng shui?", "answer": "South-facing doors bring fame and recognition. East-facing doors promote health and family. There is no single best direction — it depends on your personal goals and the home's layout."},
            {"question": "Is it bad feng shui if my front door faces a staircase?", "answer": "It can cause chi to rush upstairs too quickly. Place a healthy plant, rug, or decorative screen at the base of the stairs to slow the energy flow."},
            {"question": "Should the front door open inward or outward?", "answer": "Inward. A door that opens inward welcomes chi into your home. An outward-opening door pushes energy away."},
            {"question": "What should I place near my front door for good feng shui?", "answer": "Healthy plants, a clean welcome mat, good lighting, and a clear pathway. Avoid clutter, dead plants, or broken items near the entrance."}
        ],
        "relatedPages": ["bedroom", "kitchen", "tips"]
    },
    "office": {
        "slug": "office",
        "title": "Feng Shui Office — Desk Placement, Colors & Productivity Tips",
        "metaDescription": "Boost productivity and career luck with feng shui office tips. Learn the best desk placement, colors, and layout for your home office or workspace.",
        "h1": "Feng Shui Office — Desk Placement, Colors & Productivity",
        "content": "Your office environment directly affects your focus, creativity, and career growth. In feng shui, the desk is the command center of your professional life. The most important rule is the commanding position: place your desk so you can see the door without sitting directly in line with it. This gives you a sense of control and reduces anxiety. If you cannot move your desk, place a small mirror on your desk to reflect the entrance. The best feng shui office colors depend on your career goals — blue and black for career advancement, green for growth and creativity, and earth tones for stability. Avoid sitting with your back to a window (no support) or facing a blank wall (blocked vision). Add a healthy plant to bring life force into the space, and keep your desk organized to allow chi to flow freely.",
        "tips": [
            "Place your desk in the commanding position: facing the door, with a solid wall behind you for support.",
            "If you must face a wall, hang artwork with an expansive view (mountains, ocean) to create visual depth.",
            "Keep your desk clean and organized. Clutter blocks chi flow and reduces mental clarity.",
            "Add a small plant on your desk for life energy. Avoid cacti or sharp-leafed plants — they create sha qi.",
            "Use task lighting in addition to overhead lights. Good lighting activates yang energy and boosts focus.",
            "Avoid sitting directly under an overhead beam — it creates pressure and health issues over time.",
            "Place your computer in the north or east sector of your desk for career growth and new opportunities."
        ],
        "colors": [
            {"name": "Navy Blue", "hex": "#2C3E50", "meaning": "Water element — career advancement, wisdom, focus"},
            {"name": "Forest Green", "hex": "#228B22", "meaning": "Wood element — growth, creativity, new beginnings"},
            {"name": "Warm Beige", "hex": "#D2B48C", "meaning": "Earth element — stability, trust, grounding"},
            {"name": "Soft White", "hex": "#F5F5F5", "meaning": "Metal element — clarity, precision, efficiency"}
        ],
        "faq": [
            {"question": "What is the best feng shui desk position?", "answer": "The commanding position: facing the door with a solid wall behind you. You should be able to see who enters without sitting directly in the doorway's line."},
            {"question": "What color should my office be for feng shui?", "answer": "It depends on your goals. Blue and black for career growth, green for creativity, earth tones for stability, and white for clarity and precision."},
            {"question": "Is it bad feng shui to sit with my back to a window?", "answer": "Yes. A window behind you provides no support and can create feelings of vulnerability. If unavoidable, place a tall plant or solid curtain behind your chair."},
            {"question": "Should I have plants in my office?", "answer": "Yes, healthy plants bring life force and positive energy. Choose round-leafed plants like jade or pothos. Avoid cacti and sharp-leafed plants."},
            {"question": "How should I organize my desk for good feng shui?", "answer": "Keep the center clear, place your computer in the north or east, and remove anything broken or unused. A clean desk allows chi to flow and supports mental clarity."}
        ],
        "relatedPages": ["tips", "bedroom", "kitchen"]
    },
    "plants": {
        "slug": "plants",
        "title": "Feng Shui Plants — Best Plants for Home, Placement & Meaning",
        "metaDescription": "Discover the best feng shui plants for your home. Learn which plants attract wealth, purify energy, and where to place them for maximum benefit.",
        "h1": "Feng Shui Plants — Best Plants for Home & Placement",
        "content": "Plants are one of the most powerful feng shui cures. They represent the wood element — growth, vitality, and upward energy. Living plants purify air, soften sharp corners, and bring life force into any space. The best feng shui plants have round, soft leaves that promote gentle, flowing chi. Avoid plants with sharp, pointed leaves (like cactus) in living areas — they create sha qi, or cutting energy. The money tree (Pachira aquatica) is the most popular feng shui plant for wealth, often placed in the southeast corner of a room. The jade plant symbolizes prosperity and is ideal for offices. Lucky bamboo brings good fortune and is often placed in the east for health or southeast for wealth. The key is to keep plants healthy — a dying plant creates stagnant, negative energy and is worse than no plant at all.",
        "tips": [
            "Place the money tree in the southeast corner of your living room or office to activate wealth energy.",
            "Use tall plants like a fiddle leaf fig to soften sharp corners and redirect chi flow in hallways.",
            "Avoid placing cacti or sharp-leafed plants in bedrooms — their aggressive energy disrupts rest.",
            "Remove dead or dying plants immediately. They create yin chi that drains energy from the space.",
            "Place healthy plants near the front door to welcome positive chi as it enters your home.",
            "Use hanging plants to draw energy upward in rooms with low ceilings.",
            "Group plants in odd numbers (3, 5, 7) for natural, balanced feng shui arrangements."
        ],
        "colors": [
            {"name": "Green", "hex": "#228B22", "meaning": "Wood element — growth, health, vitality, renewal"},
            {"name": "Deep Green", "hex": "#006400", "meaning": "Wood element — abundance, depth, grounding growth"},
            {"name": "Light Green", "hex": "#90EE90", "meaning": "Wood element — new beginnings, freshness, spring energy"}
        ],
        "faq": [
            {"question": "What is the best feng shui plant for wealth?", "answer": "The money tree (Pachira aquatica) is the most popular. Place it in the southeast corner of your home or office. Jade plants and lucky bamboo are also excellent for attracting prosperity."},
            {"question": "Are cacti bad feng shui?", "answer": "In living areas, yes. Cacti have sharp, pointed leaves that create sha qi (cutting energy). They are better suited for outdoor spaces or windowsills where they can deflect negative energy from outside."},
            {"question": "Where should I place plants for good feng shui?", "answer": "Southeast for wealth, east for health and family, near the front door to welcome chi, and in corners to prevent energy stagnation. Avoid placing large plants in bedrooms."},
            {"question": "Is a dying plant bad feng shui?", "answer": "Yes. A dying or dead plant creates stagnant, negative energy. It is better to have no plant than a sick one. Remove dead plants immediately and replace them."},
            {"question": "How many plants should I have in a room?", "answer": "Odd numbers (3, 5, 7) create natural, balanced arrangements. Avoid overcrowding — plants need space to grow and chi needs space to flow."}
        ],
        "relatedPages": ["tips", "bedroom", "office"]
    },
    "mirror": {
        "slug": "mirror",
        "title": "Feng Shui Mirror Placement — Where to Hang & Where to Avoid",
        "metaDescription": "Learn the do's and don'ts of feng shui mirror placement. Where to hang mirrors for positive energy and where to avoid them for better sleep and luck.",
        "h1": "Feng Shui Mirror Placement — Where to Hang Mirrors",
        "content": "Mirrors are called the aspirin of feng shui because they can fix so many problems. They expand space, redirect chi, bring in natural light, and double whatever they reflect. But mirrors are also one of the most misused feng shui tools. A mirror placed in the wrong location can cause serious problems — sleeplessness, relationship tension, and financial instability. The golden rule of feng shui mirror placement: only reflect beautiful, positive things. A mirror reflecting a garden doubles the garden's energy. A mirror reflecting clutter doubles the clutter's energy. Never place a mirror facing the front door (it pushes chi back out), facing the bed (disturbs sleep and invites third-party interference in relationships), or reflecting a staircase (chi rushes too fast). The best places for mirrors are dining rooms (doubles abundance), hallways (expands narrow spaces), and living rooms (reflects joyful gatherings).",
        "tips": [
            "Hang mirrors in dining rooms to double the abundance energy of the table — especially when set with food.",
            "Use mirrors in narrow hallways to expand the space and keep chi from rushing too fast.",
            "Never place a mirror directly opposite the front door — it reflects chi right back outside.",
            "Avoid mirrors facing the bed. If unavoidable, cover them with a cloth at night.",
            "Round and oval mirrors are gentler and create softer chi than sharp-cornered rectangular ones.",
            "Hang mirrors at a height that reflects something beautiful — a garden view, artwork, or candlelight.",
            "Broken or cracked mirrors must be replaced immediately. They distort energy and create negative chi."
        ],
        "colors": [
            {"name": "Silver", "hex": "#C0C0C0", "meaning": "Metal element — clarity, reflection, precision"},
            {"name": "Gold Frame", "hex": "#DAA520", "meaning": "Metal + Fire — wealth, warmth, prestige"},
            {"name": "Natural Wood Frame", "hex": "#8B7355", "meaning": "Metal + Wood — balance, growth, stability"}
        ],
        "faq": [
            {"question": "Is it bad feng shui to have a mirror facing the bed?", "answer": "Yes. Mirrors facing the bed can disturb sleep, cause nightmares, and are believed to invite third-party interference in relationships. If you cannot move the mirror, cover it with a cloth at night."},
            {"question": "Where is the best place to hang a mirror in feng shui?", "answer": "Dining rooms (doubles abundance), narrow hallways (expands space), and living rooms (reflects gatherings). Always reflect something beautiful and positive."},
            {"question": "Can I put a mirror in the bedroom?", "answer": "Yes, but not facing the bed or the door. A mirror on a side wall that does not reflect the bed is acceptable."},
            {"question": "What shape mirror is best for feng shui?", "answer": "Round and oval mirrors are best — they create gentle, flowing chi. Square mirrors work in earth-element areas. Avoid irregular or broken shapes."},
            {"question": "Is a broken mirror bad feng shui?", "answer": "Yes. A broken or cracked mirror distorts energy and creates negative chi. Replace it immediately."}
        ],
        "relatedPages": ["bedroom", "tips", "front-door"]
    }
}

count = 0
for key, entry in new_entries.items():
    if key not in existing:
        data[key] = entry
        count += 1
        print(f"  + {entry['slug']}")
    else:
        print(f"  ~ {key} (already exists, skipped)")

with open(DATA_FILE, 'w') as f:
    json.dump(data, f, indent=2, ensure_ascii=False)

print(f"\nTotal entries: {len(data)} (added {count} new)")
