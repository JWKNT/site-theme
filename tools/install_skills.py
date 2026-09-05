#!/usr/bin/env python3
"""Link the versioned jehlp skills into local Codex discovery; dry run by default."""
import argparse
from pathlib import Path

def plan_links(source, destination):
    plan = []
    for skill in sorted(source.iterdir()):
        if not (skill / 'SKILL.md').is_file():
            continue
        target = destination / skill.name
        if target.is_symlink() and target.resolve() == skill.resolve():
            continue
        if target.exists() or target.is_symlink():
            raise ValueError(f'Conflicting skill already exists: {target}. Reconcile it manually.')
        plan.append((skill.resolve(), target))
    return plan

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--destination', type=Path, default=Path.home() / '.agents' / 'skills')
    parser.add_argument('--apply', action='store_true', help='Create links after checking every name')
    args = parser.parse_args()
    source = Path(__file__).resolve().parents[1] / 'skills'
    destination = args.destination.expanduser().absolute()
    try:
        plan = plan_links(source, destination)
    except ValueError as error:
        parser.exit(1, f'{error}\n')
    for skill, target in plan:
        print(f'{target} -> {skill}')
    if not args.apply:
        print(f'Dry run: {len(plan)} link(s). Add --apply to install.')
        return
    destination.mkdir(parents=True, exist_ok=True)
    for skill, target in plan:
        target.symlink_to(skill, target_is_directory=True)
    print(f'Installed {len(plan)} link(s). Existing matching links were retained.')

if __name__ == '__main__':
    main()
