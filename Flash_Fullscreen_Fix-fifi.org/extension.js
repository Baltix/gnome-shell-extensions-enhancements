// Flash FullScreen Fix
// Copyright (C) 2014 Philippe Troin <phil@fifi.org>
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

const Main = imports.ui.main;

let _handlerid;

function _onWindowCreated(display, window) {
    if (window.get_wm_class() === 'Plugin-container') {
	 Main.activateWindow(window);
    }
}

function init() {
    _handlerid = null;
}

function enable() {
    disable();
    _handlerid = global.display.connect('window-created', _onWindowCreated);
}

function disable() {
    if (_handlerid !== null) {
	global.display.disconnect(_handlerid);
    }
    _handlerid = null;
}
